"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BookOpen, Clock, Users, Star, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorId: string
  category: string
  level: "初級" | "中級" | "上級"
  duration: string
  lessons: number
  enrolled: number
  rating: number
  thumbnail: string
  isPremium: boolean
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "ケアマネ道場",
    description: "AI時代のケアマネジメントの本質を学ぶ実践講座。ケアプランの作成から倫理的な判断まで、玉城竜一氏が深く解説します。",
    instructor: "玉城 竜一",
    instructorId: "1",
    category: "ケアマネジメント",
    level: "中級",
    duration: "12時間",
    lessons: 32,
    enrolled: 850,
    rating: 4.9,
    thumbnail: "/course-caremanager.jpg",
    isPremium: true
  },
  {
    id: "2",
    title: "在宅介護実践コース",
    description: "在宅介護の基礎から応用まで体系的に学びます。利用者とその家族に寄り添うケアの実践方法を習得します。",
    instructor: "山田 花子",
    instructorId: "2",
    category: "在宅介護",
    level: "初級",
    duration: "6時間",
    lessons: 18,
    enrolled: 520,
    rating: 4.7,
    thumbnail: "/course-home-care.jpg",
    isPremium: false
  },
  {
    id: "3",
    title: "認知症ケア専門コース",
    description: "認知症ケアの理論と実践を深く学びます。パーソン・センタード・ケアの理念に基づいた実践的なケア手法を習得します。",
    instructor: "佐藤 健一",
    instructorId: "3",
    category: "認知症ケア",
    level: "中級",
    duration: "10時間",
    lessons: 28,
    enrolled: 920,
    rating: 4.8,
    thumbnail: "/course-dementia.jpg",
    isPremium: true
  },
  {
    id: "4",
    title: "リハビリテーション基礎コース",
    description: "介護現場で活かせるリハビリの基礎知識を学びます。生活機能の維持・向上を重視したアプローチを習得します。",
    instructor: "伊藤 美咲",
    instructorId: "4",
    category: "リハビリ",
    level: "初級",
    duration: "5時間",
    lessons: 15,
    enrolled: 380,
    rating: 4.6,
    thumbnail: "/course-rehab.jpg",
    isPremium: false
  },
  {
    id: "5",
    title: "介護施設運営コース",
    description: "施設運営のノウハウとマネジメント手法を学びます。業務効率化と質の向上を両立させる実践的な知識を習得します。",
    instructor: "中村 太郎",
    instructorId: "5",
    category: "施設介護",
    level: "上級",
    duration: "8時間",
    lessons: 22,
    enrolled: 290,
    rating: 4.5,
    thumbnail: "/course-facility.jpg",
    isPremium: true
  },
  {
    id: "6",
    title: "実践的介護研修プログラム開発コース",
    description: "効果的な研修プログラムの設計と実施方法を学びます。現場のニーズに即した教育プログラムを開発するスキルを習得します。",
    instructor: "照喜名 いずみ",
    instructorId: "6",
    category: "教育・研修",
    level: "上級",
    duration: "9時間",
    lessons: 25,
    enrolled: 780,
    rating: 4.9,
    thumbnail: "/course-training.jpg",
    isPremium: true
  },
  {
    id: "7",
    title: "看護師が教える介護事業経営コース",
    description: "医療と介護を融合した質の高い事業運営を学びます。看護師の視点から見る介護経営のポイントを習得します。",
    instructor: "嶺井 美幸",
    instructorId: "7",
    category: "介護経営",
    level: "上級",
    duration: "6時間",
    lessons: 18,
    enrolled: 520,
    rating: 4.8,
    thumbnail: "/course-nursing-management.jpg",
    isPremium: true
  },
  {
    id: "8",
    title: "介護のマナ完全習得コース",
    description: "居宅マナ・勤怠マナ・記録マナの導入と活用方法を学びます。介護業務の標準化とDX化を実現します。",
    instructor: "嶺井 政哉",
    instructorId: "8",
    category: "介護DX",
    level: "中級",
    duration: "10時間",
    lessons: 28,
    enrolled: 680,
    rating: 4.7,
    thumbnail: "/course-manner.jpg",
    isPremium: true
  },
  {
    id: "9",
    title: "カスタマーサクセス実践コース",
    description: "介護ソフト導入支援と顧客満足度向上の技術を学びます。バックオフィス業務の効率化を実現します。",
    instructor: "與那城 愛理",
    instructorId: "9",
    category: "業務支援",
    level: "中級",
    duration: "9時間",
    lessons: 24,
    enrolled: 750,
    rating: 4.9,
    thumbnail: "/course-cs.jpg",
    isPremium: true
  },
  {
    id: "10",
    title: "介護事業創業・融資実践コース",
    description: "創業計画から融資申請まで実践的に学びます。金融公庫での経験を活かした資金調達のノウハウを習得します。",
    instructor: "上原 宇行",
    instructorId: "10",
    category: "財務・融資",
    level: "上級",
    duration: "9.5時間",
    lessons: 26,
    enrolled: 380,
    rating: 4.6,
    thumbnail: "/course-finance.jpg",
    isPremium: true
  }
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")

  const categories = ["all", "ケアマネジメント", "在宅介護", "認知症ケア", "リハビリ", "施設介護", "教育・研修", "介護経営", "介護DX", "業務支援", "財務・融資"]
  const levels = ["all", "初級", "中級", "上級"]

  const filteredCourses = mockCourses.filter(course => {
    const categoryMatch = selectedCategory === "all" || course.category === selectedCategory
    const levelMatch = selectedLevel === "all" || course.level === selectedLevel
    return categoryMatch && levelMatch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">{"国のため、道のため、人のため"}</div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex-shrink-0" />
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
              href="/courses"
              className="text-sm font-medium text-accent border-b-2 border-accent pb-1"
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
              href="/#pricing"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"参加費用"}
            </Link>
            <Link
              href="/philosophy"
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

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">道場一覧</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            NIPPON介護道場で提供する全コースをご覧いただけます。あなたの目的やレベルに合わせて、最適な学びを見つけましょう。
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-3 block">カテゴリー</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    {category === "all" ? "すべて" : category}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-3 block">レベル</label>
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                    className={selectedLevel === level ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    {level === "all" ? "すべて" : level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {filteredCourses.length}件のコースが見つかりました
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Play className="size-16 text-white opacity-70" />
                  </div>
                  {course.isPremium && (
                    <Badge className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                      プレミアム
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="size-10 bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {course.instructor.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{course.instructor}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="size-4" />
                    <span>{course.lessons}レッスン</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{course.enrolled.toLocaleString()}名</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/course/${course.id}`}>
                    詳細を見る
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="border-2 border-accent bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">すべてのコースが見放題</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              月額1,800円で全コースにアクセス可能。3日間の無料体験で、まずはお試しください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signup">
                  3日間無料体験を始める
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/instructors">
                  講師一覧を見る
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
