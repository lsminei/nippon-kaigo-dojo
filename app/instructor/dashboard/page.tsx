"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  FileText, Video, Image, DollarSign, Upload, Eye, Edit, Trash2,
  Plus, BarChart, Users, BookOpen, TrendingUp, LogOut, Settings,
  Home, Calendar, Clock
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

type ContentType = "article" | "article-image" | "video" | "video-article" | "video-image-article" | "paid-video" | "paid-article"

interface Content {
  id: string
  title: string
  type: ContentType
  status: "draft" | "published" | "scheduled"
  views: number
  likes: number
  publishedAt?: string
  scheduledAt?: string
  isPaid: boolean
  price?: number
}

const mockContents: Content[] = [
  {
    id: "1",
    title: "AI時代のケアマネジメントの本質",
    type: "article",
    status: "published",
    views: 1250,
    likes: 89,
    publishedAt: "2025-01-10",
    isPaid: false
  },
  {
    id: "2",
    title: "認知症ケアの実践的アプローチ",
    type: "video-article",
    status: "published",
    views: 890,
    likes: 67,
    publishedAt: "2025-01-08",
    isPaid: false
  },
  {
    id: "3",
    title: "【有料講座】プロフェッショナル介護技術",
    type: "paid-video",
    status: "published",
    views: 450,
    likes: 45,
    publishedAt: "2025-01-05",
    isPaid: true,
    price: 2980
  },
  {
    id: "4",
    title: "介護現場でのコミュニケーション技法",
    type: "article-image",
    status: "draft",
    views: 0,
    likes: 0,
    isPaid: false
  }
]

export default function InstructorDashboard() {
  const { user, logout } = useAuth()
  const [contents, setContents] = useState(mockContents)
  const [isCreating, setIsCreating] = useState(false)
  const [newContent, setNewContent] = useState({
    title: "",
    type: "article" as ContentType,
    content: "",
    isPaid: false,
    price: 0,
    scheduleDate: "",
    scheduleTime: ""
  })

  const getContentTypeIcon = (type: ContentType) => {
    switch (type) {
      case "article":
      case "paid-article":
        return <FileText className="size-4" />
      case "article-image":
        return (
          <div className="flex gap-1">
            <FileText className="size-4" />
            <Image className="size-4" />
          </div>
        )
      case "video":
      case "paid-video":
        return <Video className="size-4" />
      case "video-article":
        return (
          <div className="flex gap-1">
            <Video className="size-4" />
            <FileText className="size-4" />
          </div>
        )
      case "video-image-article":
        return (
          <div className="flex gap-1">
            <Video className="size-4" />
            <Image className="size-4" />
            <FileText className="size-4" />
          </div>
        )
      default:
        return <FileText className="size-4" />
    }
  }

  const getContentTypeName = (type: ContentType) => {
    switch (type) {
      case "article": return "記事"
      case "article-image": return "記事＋画像"
      case "video": return "動画"
      case "video-article": return "動画＋記事"
      case "video-image-article": return "動画＋画像＋記事"
      case "paid-video": return "動画講座（有料）"
      case "paid-article": return "有料記事"
      default: return type
    }
  }

  const handleCreateContent = () => {
    const newContentItem: Content = {
      id: (contents.length + 1).toString(),
      title: newContent.title,
      type: newContent.type,
      status: newContent.scheduleDate ? "scheduled" : "draft",
      views: 0,
      likes: 0,
      isPaid: newContent.isPaid,
      price: newContent.isPaid ? newContent.price : undefined,
      scheduledAt: newContent.scheduleDate ? `${newContent.scheduleDate} ${newContent.scheduleTime}` : undefined
    }
    setContents([newContentItem, ...contents])
    setIsCreating(false)
    setNewContent({
      title: "",
      type: "article",
      content: "",
      isPaid: false,
      price: 0,
      scheduleDate: "",
      scheduleTime: ""
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Home className="size-5" />
                <span className="font-semibold">NIPPON介護道場</span>
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium">講師ダッシュボード</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="size-4 mr-2" />
                ログアウト
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">総コンテンツ数</CardTitle>
                <BookOpen className="size-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">+3 今月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">総視聴/閲覧数</CardTitle>
                <Eye className="size-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5K</div>
              <p className="text-xs text-muted-foreground">+15% 前月比</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">受講者数</CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">+89 今月</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">収益</CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥89,400</div>
              <p className="text-xs text-muted-foreground">今月</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <Tabs defaultValue="contents" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="contents">コンテンツ管理</TabsTrigger>
              <TabsTrigger value="analytics">分析</TabsTrigger>
              <TabsTrigger value="settings">設定</TabsTrigger>
            </TabsList>
            <Dialog open={isCreating} onOpenChange={setIsCreating}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="size-4 mr-2" />
                  新規コンテンツ作成
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>新規コンテンツ作成</DialogTitle>
                  <DialogDescription>
                    記事、画像、動画などのコンテンツを作成できます
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input
                      id="title"
                      placeholder="コンテンツのタイトルを入力"
                      value={newContent.title}
                      onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">コンテンツタイプ</Label>
                    <Select
                      value={newContent.type}
                      onValueChange={(value) => setNewContent({ ...newContent, type: value as ContentType })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">記事</SelectItem>
                        <SelectItem value="article-image">記事＋画像</SelectItem>
                        <SelectItem value="video">動画</SelectItem>
                        <SelectItem value="video-article">動画＋記事</SelectItem>
                        <SelectItem value="video-image-article">動画＋画像＋記事</SelectItem>
                        <SelectItem value="paid-video">動画講座（有料）</SelectItem>
                        <SelectItem value="paid-article">有料記事</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(newContent.type.includes("article") || newContent.type === "paid-article") && (
                    <div className="space-y-2">
                      <Label htmlFor="content">記事内容</Label>
                      <Textarea
                        id="content"
                        placeholder="記事の内容を入力..."
                        rows={8}
                        value={newContent.content}
                        onChange={(e) => setNewContent({ ...newContent, content: e.target.value })}
                      />
                    </div>
                  )}

                  {(newContent.type.includes("video") || newContent.type === "paid-video") && (
                    <div className="space-y-2">
                      <Label htmlFor="video">動画ファイル</Label>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="size-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          クリックまたはドラッグ&ドロップでアップロード
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          MP4, MOV, AVI (最大1GB)
                        </p>
                      </div>
                    </div>
                  )}

                  {newContent.type.includes("image") && (
                    <div className="space-y-2">
                      <Label htmlFor="image">画像ファイル</Label>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="size-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          クリックまたはドラッグ&ドロップでアップロード
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          JPG, PNG, GIF (最大10MB)
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="paid"
                      checked={newContent.isPaid || newContent.type.includes("paid")}
                      onCheckedChange={(checked) => setNewContent({ ...newContent, isPaid: checked })}
                      disabled={newContent.type.includes("paid")}
                    />
                    <Label htmlFor="paid">有料コンテンツ</Label>
                  </div>

                  {(newContent.isPaid || newContent.type.includes("paid")) && (
                    <div className="space-y-2">
                      <Label htmlFor="price">価格（円）</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="1980"
                        value={newContent.price}
                        onChange={(e) => setNewContent({ ...newContent, price: parseInt(e.target.value) })}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>公開設定</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="schedule-date" className="text-sm">公開予定日</Label>
                        <Input
                          id="schedule-date"
                          type="date"
                          value={newContent.scheduleDate}
                          onChange={(e) => setNewContent({ ...newContent, scheduleDate: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="schedule-time" className="text-sm">公開時刻</Label>
                        <Input
                          id="schedule-time"
                          type="time"
                          value={newContent.scheduleTime}
                          onChange={(e) => setNewContent({ ...newContent, scheduleTime: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreating(false)}>
                      キャンセル
                    </Button>
                    <Button onClick={handleCreateContent}>
                      作成する
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="contents">
            <Card>
              <CardHeader>
                <CardTitle>コンテンツ一覧</CardTitle>
                <CardDescription>
                  投稿したコンテンツの管理と編集ができます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contents.map((content) => (
                    <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{getContentTypeIcon(content.type)}</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{content.title}</h4>
                            {content.isPaid && (
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                <DollarSign className="size-3 mr-1" />
                                {content.price}円
                              </Badge>
                            )}
                            {content.status === "draft" && (
                              <Badge variant="outline">下書き</Badge>
                            )}
                            {content.status === "scheduled" && (
                              <Badge variant="outline" className="text-blue-600">
                                <Clock className="size-3 mr-1" />
                                予約投稿
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {getContentTypeName(content.type)} •
                            {content.publishedAt && ` 公開日: ${content.publishedAt} • `}
                            {content.scheduledAt && ` 予約: ${content.scheduledAt} • `}
                            {content.views > 0 && ` ${content.views}回視聴 • ${content.likes}いいね`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="size-4 mr-2" />
                          プレビュー
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="size-4 mr-2" />
                          編集
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>パフォーマンス分析</CardTitle>
                <CardDescription>
                  コンテンツのパフォーマンスと視聴者の動向を確認できます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <BarChart className="size-12 mx-auto mb-4" />
                    <p>分析データはここに表示されます</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>講師設定</CardTitle>
                <CardDescription>
                  プロフィールや支払い情報を管理できます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Settings className="size-12 mx-auto mb-4" />
                    <p>設定項目はここに表示されます</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}