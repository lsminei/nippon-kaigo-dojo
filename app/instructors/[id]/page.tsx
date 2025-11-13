"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  FileText, Video, BookOpen, Users, Star, Award, Calendar,
  Heart, Share2, Play, Lock, Clock, ArrowLeft, DollarSign
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

type ContentItem = {
  id: string
  title: string
  type: "article" | "video" | "course"
  thumbnail?: string
  description: string
  duration?: string
  publishedAt: string
  views: number
  likes: number
  isPaid: boolean
  price?: number
}

const instructorData = {
  id: "1",
  name: "玉城 竜一",
  title: "ケアマネジメント専門家",
  avatar: "/avatar1.jpg",
  specialty: ["ケアマネジメント", "認知症ケア"],
  bio: "沖縄県認知症介護指導者。AI時代のケアマネジメントの第一人者として、全国で研修や講演を行う。20年以上の現場経験を持ち、理論と実践を融合させた独自の指導方法で多くの介護従事者を育成。",
  rating: 4.9,
  studentCount: 1250,
  totalViews: 125000,
  contentCount: {
    articles: 45,
    videos: 32,
    courses: 5
  },
  achievements: [
    "厚生労働省認定 認知症介護指導者",
    "日本ケアマネジメント学会 認定講師",
    "介護福祉士国家試験 対策講座講師"
  ],
  joinedDate: "2023年4月"
}

const mockContents: ContentItem[] = [
  {
    id: "1",
    title: "AI時代のケアマネジメントの本質と実践",
    type: "article",
    description: "AIツールを活用しながらも、人間らしい温かみのあるケアマネジメントを実現する方法について解説します。",
    publishedAt: "2025年1月10日",
    views: 3500,
    likes: 245,
    isPaid: false
  },
  {
    id: "2",
    title: "【完全版】認知症ケアの基礎から応用まで",
    type: "video",
    duration: "45:30",
    description: "認知症の方への接し方、コミュニケーション技法、BPSD対応など、実践的な内容を映像で詳しく解説。",
    publishedAt: "2025年1月8日",
    views: 5200,
    likes: 389,
    isPaid: false
  },
  {
    id: "3",
    title: "プロフェッショナル介護技術マスターコース",
    type: "course",
    duration: "全12回",
    description: "介護現場で即実践できる専門技術を体系的に学ぶ有料講座。修了証発行あり。",
    publishedAt: "2025年1月5日",
    views: 890,
    likes: 125,
    isPaid: true,
    price: 29800
  },
  {
    id: "4",
    title: "家族との連携を深めるコミュニケーション術",
    type: "article",
    description: "介護サービス利用者の家族との信頼関係構築と効果的な情報共有の方法を詳しく解説。",
    publishedAt: "2024年12月28日",
    views: 2100,
    likes: 156,
    isPaid: false
  },
  {
    id: "5",
    title: "【有料】施設運営の効率化と質の向上",
    type: "video",
    duration: "60:00",
    description: "介護施設の運営における課題解決と、サービスの質を高める具体的な方法論。",
    publishedAt: "2024年12月25日",
    views: 450,
    likes: 89,
    isPaid: true,
    price: 4980
  }
]

export default function InstructorProfile() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("all")
  const [isFollowing, setIsFollowing] = useState(false)

  const filteredContents = mockContents.filter(content => {
    if (activeTab === "all") return true
    if (activeTab === "free") return !content.isPaid
    if (activeTab === "paid") return content.isPaid
    return content.type === activeTab
  })

  const getContentIcon = (type: string) => {
    switch (type) {
      case "article": return <FileText className="size-4" />
      case "video": return <Video className="size-4" />
      case "course": return <BookOpen className="size-4" />
      default: return <FileText className="size-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">{"国のため、道のため、人のため"}</div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="font-bold text-xl text-foreground tracking-wide">{"NIPPON介護道場"}</div>
              <div className="text-xs text-muted-foreground">{"日本の介護を、誇りある道へ。"}</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#news"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"最新情報"}
            </Link>
            <Link
              href="/#courses"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"道場一覧"}
            </Link>
            <Link
              href="/instructors"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"講師一覧"}
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"理念"}
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/login">{"ログイン"}</Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/instructors"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="size-4" />
          <span>講師一覧に戻る</span>
        </Link>

        {/* Instructor Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <Avatar className="size-32">
                  <AvatarImage src={instructorData.avatar} alt={instructorData.name} />
                  <AvatarFallback>{instructorData.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold">{instructorData.name}</h1>
                      <p className="text-lg text-muted-foreground">{instructorData.title}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={isFollowing ? "secondary" : "default"}
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        <Heart className={`size-4 mr-2 ${isFollowing ? "fill-current" : ""}`} />
                        {isFollowing ? "フォロー中" : "フォロー"}
                      </Button>
                      <Button variant="outline">
                        <Share2 className="size-4 mr-2" />
                        シェア
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructorData.specialty.map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {instructorData.bio}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <div className="flex items-center gap-1 text-lg font-semibold">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      {instructorData.rating}
                    </div>
                    <p className="text-xs text-muted-foreground">評価</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{instructorData.studentCount}</p>
                    <p className="text-xs text-muted-foreground">受講者</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{instructorData.contentCount.articles}</p>
                    <p className="text-xs text-muted-foreground">記事</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{instructorData.contentCount.videos}</p>
                    <p className="text-xs text-muted-foreground">動画</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{instructorData.contentCount.courses}</p>
                    <p className="text-xs text-muted-foreground">コース</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Award className="size-4" />
                    資格・実績
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {instructorData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="size-1 bg-primary rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>{instructorData.joinedDate}から活動</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>投稿コンテンツ</CardTitle>
            <CardDescription>
              {instructorData.name}講師が投稿した記事、動画、講座を閲覧できます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">すべて</TabsTrigger>
                <TabsTrigger value="article">記事</TabsTrigger>
                <TabsTrigger value="video">動画</TabsTrigger>
                <TabsTrigger value="course">コース</TabsTrigger>
                <TabsTrigger value="free">無料</TabsTrigger>
                <TabsTrigger value="paid">有料</TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                {filteredContents.map((content) => (
                  <Link key={content.id} href={`/content/${content.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4 flex-1">
                            {content.thumbnail ? (
                              <div className="w-48 h-28 bg-muted rounded-lg flex-shrink-0" />
                            ) : (
                              <div className="w-48 h-28 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
                                {content.type === "video" ? (
                                  <Play className="size-8 text-muted-foreground" />
                                ) : (
                                  getContentIcon(content.type)
                                )}
                              </div>
                            )}
                            <div className="flex-1 space-y-2">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    {getContentIcon(content.type)}
                                    <h3 className="font-semibold text-lg">{content.title}</h3>
                                    {content.isPaid && (
                                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                        <DollarSign className="size-3 mr-1" />
                                        {content.price?.toLocaleString()}円
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {content.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="size-3" />
                                  {content.publishedAt}
                                </span>
                                {content.duration && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="size-3" />
                                    {content.duration}
                                  </span>
                                )}
                                <span>{content.views.toLocaleString()}回視聴</span>
                                <span className="flex items-center gap-1">
                                  <Heart className="size-3" />
                                  {content.likes}
                                </span>
                              </div>
                            </div>
                          </div>
                          {content.isPaid && (
                            <Lock className="size-5 text-muted-foreground ml-4" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredContents.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <p>該当するコンテンツがありません</p>
                </div>
              )}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}