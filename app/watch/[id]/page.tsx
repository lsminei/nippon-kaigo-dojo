"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Play, ThumbsUp, Share2, BookmarkPlus, ChevronDown, ChevronRight, CheckCircle2, Circle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const courseContent = [
  {
    id: 1,
    title: "第1章：AI時代のケアマネジメント",
    lessons: [
      {
        id: 1,
        title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え",
        duration: "28:32",
        completed: true,
      },
      { id: 2, title: "AI技術とケアマネの未来", duration: "22:15", completed: false },
    ],
  },
  {
    id: 2,
    title: "第2章：ケアマネジメントの本質",
    lessons: [
      { id: 3, title: "なぜこの考え方に？ケアマネ論、倫理", duration: "32:15", completed: false },
      { id: 4, title: "利用者中心のケアマネジメント", duration: "25:40", completed: false },
    ],
  },
  {
    id: 3,
    title: "第3章：学びとスキル",
    lessons: [
      { id: 5, title: "教育とメタ認知リフレクション　学び方", duration: "25:08", completed: false },
      { id: 6, title: "スキルのお話し　スキルは言語化", duration: "30:45", completed: false },
    ],
  },
  {
    id: 4,
    title: "第4章：実践とAI活用",
    lessons: [
      {
        id: 7,
        title: "インプットしたものをAI活用してアウトプット　アセス・プランへ反映",
        duration: "35:20",
        completed: false,
      },
      { id: 8, title: "ケーススタディ：AIを活用したケアプラン作成", duration: "28:50", completed: false },
    ],
  },
]

export default function WatchPage() {
  const [expandedChapter, setExpandedChapter] = useState<number>(1)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">{"国のため、道のため、人のため"}</div>
        </div>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-full flex items-center justify-center border-2 border-accent">
                <span className="text-primary-foreground font-bold text-lg">介</span>
              </div>
              <span className="text-lg font-bold text-foreground hidden sm:inline">{"NIPPON介護道場"}</span>
            </Link>
            <Button asChild variant="ghost" size="sm" className="hover:text-accent">
              <Link href="/dashboard">{"ダッシュボードに戻る"}</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          {/* Main Video Section */}
          <div>
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg mb-6 relative overflow-hidden group border-4 border-accent/20">
              <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="lg" className="size-20 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Play className="size-8 ml-1" fill="currentColor" />
                </Button>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full bg-accent w-1/3" />
              </div>
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <Badge className="mb-3 bg-accent text-accent-foreground hover:bg-accent">{"ケアマネ道場"}</Badge>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance leading-tight">
                {"ケアプランAIの中に入ろうとしている人　玉城さんの考え"}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{"8,234 回視聴"}</span>
                <span>{"3日前"}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="outline" size="sm" className="hover:border-accent hover:text-accent bg-transparent">
                  <ThumbsUp className="size-4 mr-2" />
                  {"いいね"}
                </Button>
                <Button variant="outline" size="sm" className="hover:border-accent hover:text-accent bg-transparent">
                  <Share2 className="size-4 mr-2" />
                  {"共有"}
                </Button>
                <Button variant="outline" size="sm" className="hover:border-accent hover:text-accent bg-transparent">
                  <BookmarkPlus className="size-4 mr-2" />
                  {"保存"}
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Instructor Info */}
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="size-12 ring-2 ring-accent/20">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">玉</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{"玉城竜一"}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {
                    "社会福祉法人幸仁会比謝川の里 介護統括部長、沖縄県認知症介護指導者。介護福祉士、ケアマネジャー。沖縄の介護福祉業界のDXを推進し、ケアマネ法定研修の完全オンライン化を全国に先駆けて実現。"
                  }
                </p>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  {"フォロー"}
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <Card className="p-5 border-2 border-accent/10">
              <h3 className="font-bold mb-3">{"コンテンツ概要"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "AI時代におけるケアマネジャーの役割と価値について、玉城竜一氏が深く語ります。ケアプランAIが普及していく中で、ケアマネジャーはどのような考え方で利用者と向き合い、専門性を発揮していくべきか。"
                }
                <br />
                <br />
                {"このセッションでは、以下のポイントを詳しく説明します："}
                <br />
                {"• AI技術とケアマネジャーの共存"}
                <br />
                {"• テクノロジーに代替されない専門性とは"}
                <br />
                {"• 利用者中心のケアマネジメントの本質"}
                <br />
                {"• これからのケアマネジャーに求められる視点"}
                <br />
                {"• AIを活用した効率的な業務プロセス"}
              </p>
            </Card>
          </div>

          {/* Sidebar - Course Content */}
          <div>
            <Card className="p-4 sticky top-20 border-2 border-accent/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">{"コース内容"}</h3>
                <Badge variant="secondary" className="text-xs">
                  {"8本の動画"}
                </Badge>
              </div>

              <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                {courseContent.map((chapter) => (
                  <div key={chapter.id}>
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? 0 : chapter.id)}
                      className="w-full flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      <span className="font-semibold text-sm">{chapter.title}</span>
                      {expandedChapter === chapter.id ? (
                        <ChevronDown className="size-4 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronRight className="size-4 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>

                    {expandedChapter === chapter.id && (
                      <div className="space-y-1 ml-3 mt-1">
                        {chapter.lessons.map((lesson) => (
                          <Link
                            key={lesson.id}
                            href={`/watch/${lesson.id}`}
                            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group ${
                              lesson.id === 1 ? "bg-muted border-2 border-accent/20" : ""
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {lesson.completed ? (
                                <CheckCircle2 className="size-5 text-accent" />
                              ) : (
                                <Circle className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium line-clamp-2 leading-snug">{lesson.title}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{lesson.duration}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
