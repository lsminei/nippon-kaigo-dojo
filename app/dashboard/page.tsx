"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Search, BookOpen, Clock, TrendingUp, ChevronRight, Bell, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

const courses = [
  { id: 1, title: "ケアマネ道場", category: "ケアマネジメント", videos: 5, duration: "8時間", featured: true },
  { id: 2, title: "介護福祉士道場", category: "介護技術", videos: 32, duration: "12時間" },
  { id: 3, title: "介護職員初任者研修道場", category: "基礎知識", videos: 18, duration: "6時間" },
  { id: 4, title: "介護事務道場", category: "事務処理", videos: 20, duration: "7時間" },
  { id: 5, title: "サ責道場", category: "サービス提供", videos: 22, duration: "9時間" },
  { id: 6, title: "管理者道場", category: "マネジメント", videos: 28, duration: "10時間" },
  { id: 7, title: "介護倫理道場", category: "倫理観", videos: 15, duration: "5時間" },
  { id: 8, title: "介護ニュース", category: "業界動向", videos: 45, duration: "更新中" },
]

const recentVideos = [
  {
    id: 1,
    title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え",
    course: "ケアマネ道場",
    duration: "28:32",
    thumbnail: "ai-care-planning",
  },
  {
    id: 2,
    title: "なぜこの考え方に？ケアマネ論、倫理",
    course: "ケアマネ道場",
    duration: "32:15",
    thumbnail: "care-ethics",
  },
  {
    id: 3,
    title: "教育とメタ認知リフレクション　学び方",
    course: "ケアマネ道場",
    duration: "25:08",
    thumbnail: "learning-methods",
  },
  {
    id: 4,
    title: "スキルのお話し　スキルは言語化",
    course: "ケアマネ道場",
    duration: "30:45",
    thumbnail: "skill-verbalization",
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { user, logout } = useAuth()

  const getUserInitial = () => {
    if (!user?.full_name) return "U"
    return user.full_name.charAt(0)
  }

  const getUserDisplayName = () => {
    if (!user?.full_name) return "ゲスト"
    return user.full_name
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">{"国のため、道のため、人のため"}</div>
        </div>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-10 bg-accent rounded-full border-2 border-accent shadow-sm" />
              <span className="text-lg font-bold text-foreground hidden sm:inline">{"NIPPON介護道場"}</span>
            </Link>

            <div className="flex-1 max-w-xl mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="道場やコンテンツを検索..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="size-5" />
                <span className="absolute top-1.5 right-1.5 size-2 bg-accent rounded-full" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => logout()}>
                {"ログアウト"}
              </Button>
              <Avatar className="cursor-pointer ring-2 ring-accent/20">
                <AvatarFallback className="bg-primary text-primary-foreground">{getUserInitial()}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="道場やコンテンツを検索..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">ようこそ、{getUserDisplayName()}さん</h1>
          <p className="text-muted-foreground">{"今日も道を極める一日にしましょう"}</p>
        </div>

        {/* Tabs for News and Videos */}
        <Tabs defaultValue="videos" className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="videos">{"動画"}</TabsTrigger>
            <TabsTrigger value="news">{"最新情報"}</TabsTrigger>
            <TabsTrigger value="articles">{"記事"}</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8 mt-8">
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 border-l-4 border-l-accent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"学習時間"}</p>
                    <p className="text-2xl font-bold">{"24.5時間"}</p>
                  </div>
                  <div className="size-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="size-6 text-accent" />
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"完了コース"}</p>
                    <p className="text-2xl font-bold">{"3 / 8"}</p>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="size-6 text-primary" />
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-l-4 border-l-chart-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"今週の進捗"}</p>
                    <p className="text-2xl font-bold">{"+12%"}</p>
                  </div>
                  <div className="size-12 bg-chart-2/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="size-6 text-chart-2" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Continue Watching */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{"視聴を続ける"}</h2>
                <Button variant="ghost" size="sm">
                  {"すべて見る"}
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recentVideos.map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-accent"
                  >
                    <Link href={`/watch/${video.id}`}>
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="size-12 bg-accent rounded-full flex items-center justify-center">
                            <Play className="size-6 text-accent-foreground ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {video.course}
                        </Badge>
                        <h3 className="font-semibold text-sm line-clamp-2 leading-snug">{video.title}</h3>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{"全道場シリーズ"}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className={`p-5 hover:shadow-lg transition-shadow cursor-pointer group border-2 hover:border-accent ${
                      course.featured ? "border-accent ring-2 ring-accent/20" : ""
                    }`}
                  >
                    <Link href={`/course/${course.id}`}>
                      <div className="size-16 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative">
                        <Play className="size-8 text-primary" />
                        {course.featured && (
                          <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                            {"第一弾"}
                          </div>
                        )}
                      </div>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {course.category}
                      </Badge>
                      <h3 className="font-bold mb-2 text-lg">{course.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Play className="size-3" />
                          {course.videos}本
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {course.duration}
                        </span>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="news" className="mt-8">
            <div className="space-y-4">
              {[
                {
                  date: "2025年1月12日",
                  category: "道場の取組",
                  title: "第219回ケアマネ道場における玉城竜一氏の講演を公開しました",
                  tag: "動画",
                },
                {
                  date: "2025年1月12日",
                  category: "道場の発見",
                  title: "「AI時代のケアマネジメント」に関する高市総理メッセージ",
                  tag: "記事",
                },
                {
                  date: "2025年1月11日",
                  category: "道場の一日",
                  title: "沖縄県認知症介護指導者による認知症ケア実践研修の完全オンライン化について",
                  tag: "写真",
                },
                {
                  date: "2025年1月10日",
                  category: "制度改正",
                  title: "令和7年度介護報酬改定のポイント解説",
                  tag: "記事",
                },
                {
                  date: "2025年1月9日",
                  category: "DX推進",
                  title: "介護現場におけるICT活用の最新事例",
                  tag: "記事",
                },
              ].map((news, i) => (
                <Link key={i} href={`/news/${i + 1}`}>
                  <Card className="p-5 hover:shadow-lg transition-shadow group cursor-pointer border-2 hover:border-accent">
                    <div className="flex gap-4">
                      <div className="size-24 bg-primary/10 rounded flex-shrink-0 flex items-center justify-center">
                        <BookOpen className="size-10 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-accent text-accent-foreground text-xs">{news.tag}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="size-3" />
                            <time>{news.date}</time>
                          </div>
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {news.category}
                        </Badge>
                        <h3 className="font-bold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  date: "令和7年1月10日",
                  title: "沖縄県の介護DX推進における取り組みと成果",
                  category: "DX推進",
                  views: "856",
                  excerpt: "沖縄県における介護DXの先進的な取り組みについて詳しく解説します。",
                },
                {
                  date: "令和7年1月9日",
                  title: "ケアマネ法定研修の完全オンライン化の実現について",
                  category: "教育改革",
                  views: "1,032",
                  excerpt: "コロナ禍をきっかけに実現した、全国初のケアマネ法定研修オンライン化の経緯。",
                },
                {
                  date: "令和7年1月8日",
                  title: "地域密着型サービスにおける統括管理の実践事例",
                  category: "実践報告",
                  views: "623",
                  excerpt: "居宅、小規模、GHの統括管理における実践的なノウハウを紹介します。",
                },
                {
                  date: "令和7年1月7日",
                  title: "認知症介護指導者が語る、認知症ケアの本質",
                  category: "専門知識",
                  views: "892",
                  excerpt: "認知症ケアにおいて最も重要な視点と実践方法について。",
                },
              ].map((article, i) => (
                <Link key={i} href={`/article/${i + 1}`}>
                  <Card className="p-6 hover:shadow-xl transition-shadow group cursor-pointer border-2 hover:border-accent h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="size-20 bg-primary/10 rounded flex-shrink-0 flex items-center justify-center">
                        <BookOpen className="size-10 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="size-3" />
                          <time>{article.date}</time>
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{article.excerpt}</p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="size-3" />
                      {article.views}回閲覧
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
