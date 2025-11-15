import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Clock,
  Users,
  Star,
  BookOpen,
  FileText,
  Award,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Course {
  id: string
  title: string
  description: string
  instructor: {
    id: string
    name: string
    title: string
  }
  category: string
  level: string
  duration: string
  lessons: number
  enrolled: number
  rating: number
  reviews: number
  whatYouLearn: string[]
  requirements: string[]
  syllabus: {
    section: string
    lessons: {
      id: string
      title: string
      duration: string
      isCompleted?: boolean
      isFree?: boolean
    }[]
  }[]
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "ケアマネ道場",
    description: "AI時代のケアマネジメントの本質を学ぶ実践講座。玉城竜一氏が20年以上の経験から導き出したケアマネジメントの真髄を、体系的に学ぶことができます。",
    instructor: {
      id: "1",
      name: "玉城 竜一",
      title: "ケアマネジメント専門家"
    },
    category: "ケアマネジメント",
    level: "中級〜上級",
    duration: "12時間",
    lessons: 32,
    enrolled: 850,
    rating: 4.9,
    reviews: 245,
    whatYouLearn: [
      "AI時代におけるケアマネジャーの本質的な役割",
      "利用者中心のケアマネジメント実践手法",
      "倫理的判断力の養成",
      "多職種連携の実践的スキル",
      "継続的な自己成長のための学習方法"
    ],
    requirements: [
      "ケアマネジャー資格保有者、または取得予定の方",
      "基本的なケアマネジメント業務の経験",
      "学ぶ意欲と向上心"
    ],
    syllabus: [
      {
        section: "第1章：AI時代のケアマネジメント概論",
        lessons: [
          { id: "1", title: "ケアマネジメントとは何か", duration: "18:32", isFree: true },
          { id: "2", title: "AI時代の変化と課題", duration: "22:15", isFree: true },
          { id: "3", title: "人間にしかできない価値", duration: "25:48" },
          { id: "4", title: "これからのケアマネジャー像", duration: "20:12" }
        ]
      },
      {
        section: "第2章：利用者中心のケアマネジメント",
        lessons: [
          { id: "5", title: "利用者理解の深め方", duration: "24:30" },
          { id: "6", title: "ニーズアセスメントの実践", duration: "28:45" },
          { id: "7", title: "目標設定とケアプラン作成", duration: "26:18" },
          { id: "8", title: "モニタリングと評価", duration: "23:50" }
        ]
      },
      {
        section: "第3章：ケアマネジメントの倫理",
        lessons: [
          { id: "9", title: "倫理的ジレンマとは", duration: "21:15" },
          { id: "10", title: "意思決定支援の原則", duration: "25:30" },
          { id: "11", title: "権利擁護の実践", duration: "22:45" },
          { id: "12", title: "倫理的判断のフレームワーク", duration: "27:20" }
        ]
      },
      {
        section: "第4章：多職種連携の実践",
        lessons: [
          { id: "13", title: "チームケアの基本", duration: "20:15" },
          { id: "14", title: "効果的なコミュニケーション", duration: "24:30" },
          { id: "15", title: "サービス担当者会議の進め方", duration: "26:45" },
          { id: "16", title: "地域包括ケアシステムでの役割", duration: "23:10" }
        ]
      },
      {
        section: "第5章：継続的な学びと成長",
        lessons: [
          { id: "17", title: "リフレクションの実践", duration: "22:30" },
          { id: "18", title: "メタ認知と学習", duration: "25:15" },
          { id: "19", title: "スキルの言語化", duration: "23:45" },
          { id: "20", title: "自己成長計画の立て方", duration: "21:20" }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "在宅介護実践コース",
    description: "在宅介護の基礎から応用まで体系的に学ぶ実践的なコース。利用者とその家族に寄り添うケアの方法を習得します。",
    instructor: {
      id: "2",
      name: "山田 花子",
      title: "在宅介護スペシャリスト"
    },
    category: "在宅介護",
    level: "初級〜中級",
    duration: "6時間",
    lessons: 18,
    enrolled: 520,
    rating: 4.7,
    reviews: 156,
    whatYouLearn: [
      "在宅介護の基本的な考え方と技術",
      "利用者との信頼関係の築き方",
      "家族支援の実践方法",
      "安全な介護技術",
      "緊急時の対応"
    ],
    requirements: [
      "介護職員初任者研修修了者、または同等の知識",
      "在宅介護に興味がある方"
    ],
    syllabus: [
      {
        section: "第1章：在宅介護の基本",
        lessons: [
          { id: "1", title: "在宅介護とは", duration: "15:20", isFree: true },
          { id: "2", title: "利用者理解の重要性", duration: "18:45", isFree: true },
          { id: "3", title: "信頼関係の築き方", duration: "20:30" },
          { id: "4", title: "コミュニケーションの技法", duration: "22:15" }
        ]
      },
      {
        section: "第2章：基本的な介護技術",
        lessons: [
          { id: "5", title: "移動・移乗の介助", duration: "25:40" },
          { id: "6", title: "食事介助の基本", duration: "20:30" },
          { id: "7", title: "排泄介助の実際", duration: "22:50" },
          { id: "8", title: "入浴介助の方法", duration: "24:20" }
        ]
      },
      {
        section: "第3章：家族支援",
        lessons: [
          { id: "9", title: "家族の理解とサポート", duration: "19:30" },
          { id: "10", title: "介護負担の軽減", duration: "21:45" },
          { id: "11", title: "レスパイトケアの活用", duration: "18:20" }
        ]
      },
      {
        section: "第4章：安全管理と緊急対応",
        lessons: [
          { id: "12", title: "転倒予防と環境整備", duration: "20:15" },
          { id: "13", title: "感染症対策", duration: "19:30" },
          { id: "14", title: "緊急時の対応", duration: "23:45" }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "認知症ケア専門コース",
    description: "認知症ケアの理論と実践を深く学ぶ専門コース。パーソン・センタード・ケアの理念に基づいた実践的なケア手法を習得します。",
    instructor: {
      id: "3",
      name: "佐藤 健一",
      title: "認知症ケア指導者"
    },
    category: "認知症ケア",
    level: "中級〜上級",
    duration: "10時間",
    lessons: 28,
    enrolled: 920,
    rating: 4.8,
    reviews: 312,
    whatYouLearn: [
      "認知症の医学的理解",
      "パーソン・センタード・ケアの実践",
      "BPSDへの適切な対応",
      "コミュニケーション技法",
      "家族支援の方法"
    ],
    requirements: [
      "介護実務経験1年以上",
      "認知症ケアに関心のある方"
    ],
    syllabus: [
      {
        section: "第1章：認知症の理解",
        lessons: [
          { id: "1", title: "認知症とは何か", duration: "20:15", isFree: true },
          { id: "2", title: "認知症の種類と特徴", duration: "24:30", isFree: true },
          { id: "3", title: "認知症の進行と症状", duration: "22:45" },
          { id: "4", title: "早期発見と早期対応", duration: "19:20" }
        ]
      },
      {
        section: "第2章：パーソン・センタード・ケア",
        lessons: [
          { id: "5", title: "パーソン・センタード・ケアの理念", duration: "21:30" },
          { id: "6", title: "その人らしさの理解", duration: "23:15" },
          { id: "7", title: "尊厳を守るケア", duration: "25:40" },
          { id: "8", title: "環境づくりの重要性", duration: "20:50" }
        ]
      },
      {
        section: "第3章：BPSDへの対応",
        lessons: [
          { id: "9", title: "BPSDとは", duration: "22:20" },
          { id: "10", title: "原因の理解とアセスメント", duration: "26:15" },
          { id: "11", title: "非薬物的アプローチ", duration: "24:45" },
          { id: "12", title: "事例から学ぶ対応方法", duration: "28:30" }
        ]
      }
    ]
  }
]

// Generate static params for all courses
export function generateStaticParams() {
  return mockCourses.map((course) => ({
    id: course.id,
  }))
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = mockCourses.find(c => c.id === id)

  if (!course) {
    notFound()
  }

  const totalLessons = course.syllabus.reduce((acc, section) => acc + section.lessons.length, 0)
  const completedLessons = course.syllabus.reduce(
    (acc, section) => acc + section.lessons.filter(l => l.isCompleted).length,
    0
  )
  const progress = (completedLessons / totalLessons) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">国のため、道のため、人のため</div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex-shrink-0" />
            <div>
              <div className="font-bold text-xl text-foreground tracking-wide">NIPPON介護道場</div>
              <div className="text-xs text-muted-foreground">日本の介護を、誇りある道へ。</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard">
                <ArrowLeft className="size-4 mr-2" />
                ダッシュボードに戻る
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Hero */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge className="bg-accent text-accent-foreground">{course.level}</Badge>
              </div>

              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

              <div className="flex items-center gap-6 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews}件の評価)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-muted-foreground" />
                  <span>{course.enrolled}名受講中</span>
                </div>
              </div>

              {/* Instructor */}
              <Card className="border-2 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-16 bg-primary text-primary-foreground">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                        {course.instructor.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">講師</p>
                      <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/instructors/${course.instructor.id}`}>プロフィール</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card className="border-2 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="size-5" />
                    このコースで学べること
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.whatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="size-5" />
                    受講要件
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Card */}
            <Card className="border-2 sticky top-24">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="size-16 bg-accent rounded-full flex items-center justify-center">
                    <Play className="size-8 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-4 text-muted-foreground" />
                    <span>{course.lessons}レッスン</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-muted-foreground" />
                    <span>修了証明書</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">学習進捗</span>
                    <span className="font-semibold">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  学習を続ける
                </Button>
              </CardContent>
            </Card>

            {/* Course Syllabus */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>コース内容</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.syllabus.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-2">
                    <h4 className="font-semibold text-sm">{section.section}</h4>
                    <div className="space-y-1">
                      {section.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          href={`/watch/${course.id}_${lesson.id}`}
                          className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            {lesson.isCompleted ? (
                              <CheckCircle2 className="size-4 text-accent flex-shrink-0" />
                            ) : (
                              <Play className="size-4 text-muted-foreground flex-shrink-0 group-hover:text-accent transition-colors" />
                            )}
                            <span className="text-sm truncate group-hover:text-accent transition-colors">{lesson.title}</span>
                            {lesson.isFree && (
                              <Badge variant="secondary" className="text-xs">無料</Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                            {lesson.duration}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
