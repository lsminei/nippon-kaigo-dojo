import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Users, BookOpen, Video, FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

type Specialty = "認知症ケア" | "在宅介護" | "施設介護" | "リハビリ" | "ケアマネジメント"

interface Instructor {
  id: string
  name: string
  title: string
  specialty: Specialty[]
  bio: string
  detailedBio: string
  rating: number
  studentCount: number
  contentCount: {
    articles: number
    videos: number
    courses: number
  }
  isPremium: boolean
}

interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  views: number
}

interface Video {
  id: string
  title: string
  duration: string
  date: string
  views: number
}

interface Course {
  id: string
  title: string
  description: string
  lessons: number
  duration: string
  enrolled: number
}

const mockInstructors: Instructor[] = [
  {
    id: "1",
    name: "玉城 竜一",
    title: "ケアマネジメント専門家",
    specialty: ["ケアマネジメント", "認知症ケア"],
    bio: "沖縄県認知症介護指導者。AI時代のケアマネジメントの第一人者",
    detailedBio: "沖縄県認知症介護指導者として20年以上のキャリアを持つ。AI時代のケアマネジメントの本質を追求し、全国各地で講演・研修を実施。介護DX推進にも積極的に取り組んでいる。",
    rating: 4.9,
    studentCount: 1250,
    contentCount: {
      articles: 45,
      videos: 32,
      courses: 5
    },
    isPremium: true
  },
  {
    id: "2",
    name: "山田 花子",
    title: "在宅介護スペシャリスト",
    specialty: ["在宅介護", "リハビリ"],
    bio: "20年以上の在宅介護経験を持つベテラン介護福祉士",
    detailedBio: "在宅介護の現場で20年以上のキャリアを積み、利用者とその家族に寄り添うケアを実践。実践的なノウハウを分かりやすく伝えることに定評がある。",
    rating: 4.7,
    studentCount: 890,
    contentCount: {
      articles: 28,
      videos: 15,
      courses: 3
    },
    isPremium: false
  },
  {
    id: "3",
    name: "佐藤 健一",
    title: "認知症ケア指導者",
    specialty: ["認知症ケア", "施設介護"],
    bio: "認知症ケア専門士として全国で研修を実施",
    detailedBio: "認知症ケア専門士として全国各地で研修・講演を実施。パーソン・センタード・ケアの理念に基づいた実践的なケア手法を伝えている。",
    rating: 4.8,
    studentCount: 1580,
    contentCount: {
      articles: 52,
      videos: 48,
      courses: 8
    },
    isPremium: true
  },
  {
    id: "4",
    name: "伊藤 美咲",
    title: "リハビリテーション専門家",
    specialty: ["リハビリ", "在宅介護"],
    bio: "理学療法士として介護現場でのリハビリを専門に指導",
    detailedBio: "理学療法士として15年のキャリアを持ち、介護現場でのリハビリテーションを専門に指導。生活機能の維持・向上を重視したアプローチを提唱。",
    rating: 4.6,
    studentCount: 620,
    contentCount: {
      articles: 18,
      videos: 22,
      courses: 2
    },
    isPremium: false
  },
  {
    id: "5",
    name: "中村 太郎",
    title: "施設運営コンサルタント",
    specialty: ["施設介護", "ケアマネジメント"],
    bio: "複数の介護施設運営に携わり、現場改革を推進",
    detailedBio: "複数の介護施設の運営に携わり、業務効率化と質の向上を両立させる現場改革を推進。マネジメントの視点から介護現場の課題解決に取り組んでいる。",
    rating: 4.5,
    studentCount: 450,
    contentCount: {
      articles: 35,
      videos: 12,
      courses: 4
    },
    isPremium: true
  },
  {
    id: "6",
    name: "照喜名 いずみ",
    title: "介護教育・研修スペシャリスト",
    specialty: ["ケアマネジメント", "認知症ケア"],
    bio: "介護現場での豊富な経験を活かし、実践的な教育プログラムを展開",
    detailedBio: "介護現場での20年以上の経験を活かし、実践的な教育プログラムを開発・展開。現場のリアルな課題に即した研修内容で、多くの介護職員の成長をサポートしている。",
    rating: 4.9,
    studentCount: 1420,
    contentCount: {
      articles: 38,
      videos: 42,
      courses: 6
    },
    isPremium: true
  },
  {
    id: "7",
    name: "嶺井 美幸",
    title: "介護事業経営者・看護師",
    specialty: ["施設介護", "在宅介護"],
    bio: "沖縄県南城市で介護事業を展開。看護師の経験を活かした質の高いケアを提供（有限会社陽気 取締役）",
    detailedBio: "沖縄県南城市を拠点に、住宅型有料老人ホーム・訪問介護・訪問看護を運営する有限会社陽気の取締役。看護師としての豊富な経験を活かし、医療と介護を融合した質の高いサービスを提供している。利用者とその家族に寄り添う温かいケアが特徴。",
    rating: 4.8,
    studentCount: 980,
    contentCount: {
      articles: 32,
      videos: 28,
      courses: 4
    },
    isPremium: true
  },
  {
    id: "8",
    name: "嶺井 政哉",
    title: "介護DX推進者・ソフトウェア開発者",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "介護の標準化を目指す「介護のマナ」を開発。介護現場のDX化を推進（株式会社ライフシフト 代表）",
    detailedBio: "株式会社ライフシフトの代表として、介護事業を営む家族のために「介護のマナ（居宅マナ・勤怠マナ・記録マナ）」を開発。介護現場の業務を標準化し、効率化するソフトウェアを提供することで、介護業界のDX化を推進している。テクノロジーと現場の課題を結びつける実践的なアプローチが特徴。",
    rating: 4.7,
    studentCount: 850,
    contentCount: {
      articles: 26,
      videos: 35,
      courses: 5
    },
    isPremium: true
  },
  {
    id: "9",
    name: "與那城 愛理",
    title: "バックオフィススペシャリスト・CS マネージャー",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "介護のマナのカスタマーサクセスマネージャー。琉球大学経済学部出身、開邦高校卒",
    detailedBio: "開邦高校、琉球大学経済学部を卒業後、介護のマナのカスタマーサクセスマネージャーとして活躍。バックオフィス業務のスペシャリストとして、介護事業所の業務効率化と顧客支援に尽力している。経済学のバックグラウンドを活かした論理的なアプローチと、きめ細やかなサポートが評価されている。",
    rating: 4.9,
    studentCount: 1150,
    contentCount: {
      articles: 42,
      videos: 38,
      courses: 6
    },
    isPremium: true
  },
  {
    id: "10",
    name: "上原 宇行",
    title: "財務スペシャリスト・経営支援コンサルタント",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "元沖縄金融公庫。中小企業の財務支援と創業期融資支援を提供（ユアトリー株式会社 代表取締役）",
    detailedBio: "沖縄県那覇市出身。那覇西高校、琉球大学経済学部を卒業後、沖縄振興開発金融公庫に勤務。2023年7月にユアトリー株式会社を設立。金融公庫での経験を活かし、中小企業経営者の財務に関する業務支援、創業期の融資支援ツールの開発など、実践的な経営支援サービスを提供している。",
    rating: 4.6,
    studentCount: 720,
    contentCount: {
      articles: 30,
      videos: 24,
      courses: 5
    },
    isPremium: true
  }
]

const mockArticles: Record<string, Article[]> = {
  "1": [
    {
      id: "1",
      title: "AI時代のケアマネジメント：本質を見失わないために",
      excerpt: "AI技術が介護現場に導入される中、ケアマネジャーが大切にすべき本質的な視点について考察します。",
      date: "2025年1月10日",
      category: "ケアマネジメント",
      views: 2340
    },
    {
      id: "2",
      title: "認知症ケアにおけるパーソン・センタード・アプローチ",
      excerpt: "認知症の方一人ひとりの個性を尊重したケアの実践方法を解説します。",
      date: "2025年1月5日",
      category: "認知症ケア",
      views: 1890
    }
  ],
  "2": [
    {
      id: "1",
      title: "在宅介護における家族支援の重要性",
      excerpt: "利用者だけでなく、介護をする家族へのサポートについて実践的なアドバイスを紹介します。",
      date: "2025年1月8日",
      category: "在宅介護",
      views: 1560
    }
  ],
  "3": [
    {
      id: "1",
      title: "認知症ケアの基本：BPSDへの対応",
      excerpt: "行動・心理症状（BPSD）への適切な対応方法を事例とともに解説します。",
      date: "2025年1月12日",
      category: "認知症ケア",
      views: 2100
    }
  ],
  "4": [
    {
      id: "1",
      title: "介護予防におけるリハビリテーションの役割",
      excerpt: "生活機能の維持・向上を目指した介護予防リハビリについて解説します。",
      date: "2025年1月9日",
      category: "リハビリ",
      views: 980
    }
  ],
  "5": [
    {
      id: "1",
      title: "介護施設における業務効率化のポイント",
      excerpt: "ICTの活用と業務プロセスの見直しによる効率化の実践例を紹介します。",
      date: "2025年1月11日",
      category: "施設運営",
      views: 1420
    }
  ],
  "6": [
    {
      id: "1",
      title: "実践的な介護研修プログラムの設計",
      excerpt: "現場のニーズに即した効果的な研修プログラムの作り方を解説します。",
      date: "2025年1月13日",
      category: "教育・研修",
      views: 1850
    },
    {
      id: "2",
      title: "新人介護職員の育成とサポート体制",
      excerpt: "新人職員が安心して成長できる環境づくりのポイントを紹介します。",
      date: "2025年1月7日",
      category: "人材育成",
      views: 1620
    }
  ],
  "7": [
    {
      id: "1",
      title: "看護師の視点から見る介護事業経営",
      excerpt: "医療と介護を融合した質の高いサービス提供のポイントを解説します。",
      date: "2025年1月14日",
      category: "介護経営",
      views: 1720
    },
    {
      id: "2",
      title: "沖縄の地域特性を活かした介護サービス",
      excerpt: "南城市での事業展開から学ぶ、地域に根ざした介護サービスの在り方を紹介します。",
      date: "2025年1月9日",
      category: "在宅介護",
      views: 1580
    }
  ],
  "8": [
    {
      id: "1",
      title: "介護のマナで実現する業務標準化",
      excerpt: "居宅マナ・勤怠マナ・記録マナによる介護現場の効率化事例を紹介します。",
      date: "2025年1月11日",
      category: "介護DX",
      views: 1980
    },
    {
      id: "2",
      title: "介護現場のDX化推進のステップ",
      excerpt: "テクノロジーを活用した介護業務の改善方法を段階的に解説します。",
      date: "2025年1月6日",
      category: "業務改善",
      views: 1450
    }
  ],
  "9": [
    {
      id: "1",
      title: "カスタマーサクセスから見る介護事業所支援",
      excerpt: "介護ソフト導入後の効果的な活用支援のポイントを解説します。",
      date: "2025年1月15日",
      category: "業務支援",
      views: 2120
    },
    {
      id: "2",
      title: "バックオフィス業務の効率化テクニック",
      excerpt: "介護事業所における事務作業の標準化と効率化の実践方法を紹介します。",
      date: "2025年1月10日",
      category: "業務改善",
      views: 1890
    }
  ],
  "10": [
    {
      id: "1",
      title: "介護事業の創業期融資戦略",
      excerpt: "金融公庫での経験を活かした、創業期の資金調達のポイントを解説します。",
      date: "2025年1月12日",
      category: "財務・融資",
      views: 1340
    },
    {
      id: "2",
      title: "中小介護事業所の財務改善実践",
      excerpt: "経営データの分析と財務改善の具体的なステップを紹介します。",
      date: "2025年1月8日",
      category: "経営支援",
      views: 1520
    }
  ]
}

const mockVideos: Record<string, Video[]> = {
  "1": [
    {
      id: "1",
      title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え",
      duration: "28:32",
      date: "2025年1月8日",
      views: 3200
    },
    {
      id: "2",
      title: "なぜこの考え方に？ケアマネ論、倫理",
      duration: "32:15",
      date: "2025年1月5日",
      views: 2850
    }
  ],
  "2": [
    {
      id: "1",
      title: "在宅介護の基本：利用者との信頼関係の築き方",
      duration: "25:40",
      date: "2025年1月7日",
      views: 1890
    }
  ],
  "3": [
    {
      id: "1",
      title: "認知症ケアの実践：コミュニケーション技法",
      duration: "30:15",
      date: "2025年1月10日",
      views: 2650
    }
  ],
  "4": [
    {
      id: "1",
      title: "リハビリテーションの基礎知識",
      duration: "22:30",
      date: "2025年1月6日",
      views: 1250
    }
  ],
  "5": [
    {
      id: "1",
      title: "介護施設のマネジメント入門",
      duration: "27:45",
      date: "2025年1月9日",
      views: 1580
    }
  ],
  "6": [
    {
      id: "1",
      title: "効果的な介護研修の進め方",
      duration: "29:20",
      date: "2025年1月12日",
      views: 2450
    },
    {
      id: "2",
      title: "介護職員のモチベーション管理",
      duration: "26:15",
      date: "2025年1月8日",
      views: 2180
    }
  ],
  "7": [
    {
      id: "1",
      title: "医療と介護の連携：有限会社陽気の取り組み",
      duration: "24:30",
      date: "2025年1月13日",
      views: 1920
    },
    {
      id: "2",
      title: "訪問看護・訪問介護の質向上のポイント",
      duration: "28:15",
      date: "2025年1月9日",
      views: 1750
    }
  ],
  "8": [
    {
      id: "1",
      title: "介護のマナ実演：居宅マナの使い方",
      duration: "21:45",
      date: "2025年1月11日",
      views: 2280
    },
    {
      id: "2",
      title: "介護DXツール導入の実践ステップ",
      duration: "19:30",
      date: "2025年1月7日",
      views: 2050
    }
  ],
  "9": [
    {
      id: "1",
      title: "介護ソフトの効果的な活用支援",
      duration: "26:40",
      date: "2025年1月14日",
      views: 2520
    },
    {
      id: "2",
      title: "バックオフィス業務の標準化実践",
      duration: "31:20",
      date: "2025年1月10日",
      views: 2340
    }
  ],
  "10": [
    {
      id: "1",
      title: "介護事業の資金調達と融資申請",
      duration: "23:50",
      date: "2025年1月12日",
      views: 1580
    },
    {
      id: "2",
      title: "中小企業経営者のための財務分析",
      duration: "27:10",
      date: "2025年1月8日",
      views: 1720
    }
  ]
}

const mockCourses: Record<string, Course[]> = {
  "1": [
    {
      id: "1",
      title: "ケアマネ道場",
      description: "AI時代のケアマネジメントの本質を学ぶ実践講座",
      lessons: 32,
      duration: "12時間",
      enrolled: 850
    }
  ],
  "2": [
    {
      id: "1",
      title: "在宅介護実践コース",
      description: "在宅介護の基礎から応用まで体系的に学ぶ",
      lessons: 18,
      duration: "6時間",
      enrolled: 520
    }
  ],
  "3": [
    {
      id: "1",
      title: "認知症ケア専門コース",
      description: "認知症ケアの理論と実践を深く学ぶ",
      lessons: 28,
      duration: "10時間",
      enrolled: 920
    }
  ],
  "4": [
    {
      id: "1",
      title: "リハビリテーション基礎コース",
      description: "介護現場で活かせるリハビリの基礎知識",
      lessons: 15,
      duration: "5時間",
      enrolled: 380
    }
  ],
  "5": [
    {
      id: "1",
      title: "介護施設運営コース",
      description: "施設運営のノウハウとマネジメント手法",
      lessons: 22,
      duration: "8時間",
      enrolled: 290
    }
  ],
  "6": [
    {
      id: "1",
      title: "実践的介護研修プログラム開発コース",
      description: "効果的な研修プログラムの設計と実施方法を学ぶ",
      lessons: 25,
      duration: "9時間",
      enrolled: 780
    },
    {
      id: "2",
      title: "介護職員育成・指導者コース",
      description: "新人育成とOJTの実践的スキルを習得",
      lessons: 20,
      duration: "7時間",
      enrolled: 640
    }
  ],
  "7": [
    {
      id: "1",
      title: "看護師が教える介護事業経営コース",
      description: "医療と介護を融合した質の高い事業運営を学ぶ",
      lessons: 18,
      duration: "6時間",
      enrolled: 520
    },
    {
      id: "2",
      title: "訪問介護・訪問看護サービス立ち上げコース",
      description: "在宅サービス事業の開設から運営までを実践的に学ぶ",
      lessons: 22,
      duration: "8時間",
      enrolled: 460
    }
  ],
  "8": [
    {
      id: "1",
      title: "介護のマナ完全習得コース",
      description: "居宅マナ・勤怠マナ・記録マナの導入と活用方法を学ぶ",
      lessons: 28,
      duration: "10時間",
      enrolled: 680
    },
    {
      id: "2",
      title: "介護DX推進実践コース",
      description: "介護現場のデジタル化とシステム導入の進め方を習得",
      lessons: 16,
      duration: "5.5時間",
      enrolled: 420
    }
  ],
  "9": [
    {
      id: "1",
      title: "カスタマーサクセス実践コース",
      description: "介護ソフト導入支援と顧客満足度向上の技術を学ぶ",
      lessons: 24,
      duration: "9時間",
      enrolled: 750
    },
    {
      id: "2",
      title: "バックオフィス業務効率化コース",
      description: "介護事業所の事務作業標準化と効率化手法を習得",
      lessons: 20,
      duration: "7.5時間",
      enrolled: 580
    }
  ],
  "10": [
    {
      id: "1",
      title: "介護事業創業・融資実践コース",
      description: "創業計画から融資申請まで実践的に学ぶ",
      lessons: 26,
      duration: "9.5時間",
      enrolled: 380
    },
    {
      id: "2",
      title: "中小介護事業所の財務マネジメントコース",
      description: "経営データ分析と財務改善の実践手法を習得",
      lessons: 19,
      duration: "7時間",
      enrolled: 340
    }
  ]
}

// Generate static params for all instructors
export function generateStaticParams() {
  return mockInstructors.map((instructor) => ({
    id: instructor.id,
  }))
}

export default async function InstructorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const instructor = mockInstructors.find(i => i.id === id)

  if (!instructor) {
    notFound()
  }

  const articles = mockArticles[id] || []
  const videos = mockVideos[id] || []
  const courses = mockCourses[id] || []

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
              <Link href="/instructors">
                <ArrowLeft className="size-4 mr-2" />
                講師一覧に戻る
              </Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/login">ログイン</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Instructor Profile */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <Card className="border-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="size-24 bg-primary text-primary-foreground">
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                    {instructor.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{instructor.name}</h1>
                      <p className="text-lg text-muted-foreground mb-4">{instructor.title}</p>
                    </div>
                    {instructor.isPremium && (
                      <Badge className="bg-yellow-100 text-yellow-800">プレミアム講師</Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.specialty.map((spec) => (
                      <Badge key={spec} variant="outline">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-base leading-relaxed mb-6">{instructor.detailedBio}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold">{instructor.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">評価</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="size-4 text-muted-foreground" />
                        <span className="text-2xl font-bold">{instructor.studentCount}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">受講者</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <FileText className="size-4 text-muted-foreground" />
                        <span className="text-2xl font-bold">{instructor.contentCount.articles}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">記事</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Video className="size-4 text-muted-foreground" />
                        <span className="text-2xl font-bold">{instructor.contentCount.videos}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">動画</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="courses">コース</TabsTrigger>
            <TabsTrigger value="videos">動画</TabsTrigger>
            <TabsTrigger value="articles">記事</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            {courses.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="size-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                          <BookOpen className="size-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{course.lessons}レッスン</span>
                            <span>{course.duration}</span>
                            <span>{course.enrolled}名受講中</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <Link href={`/course/${course.id}`}>コースを見る</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-12">コンテンツはまだありません</p>
            )}
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            {videos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          <span>{video.date}</span>
                        </div>
                        <span>{video.views}回視聴</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-12">動画はまだありません</p>
            )}
          </TabsContent>

          <TabsContent value="articles" className="space-y-4">
            {articles.length > 0 ? (
              <div className="space-y-4">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex gap-4">
                        <div className="size-20 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                          <FileText className="size-10 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="size-3" />
                              <time>{article.date}</time>
                            </div>
                          </div>
                          <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{article.views}回閲覧</span>
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/article/${article.id}`}>記事を読む</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-12">記事はまだありません</p>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
