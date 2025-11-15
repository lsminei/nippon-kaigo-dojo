"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, BookOpen, Video, FileText, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

type ContentType = "article" | "video" | "course" | "all"
type Specialty = "認知症ケア" | "在宅介護" | "施設介護" | "リハビリ" | "ケアマネジメント" | "all"

interface Instructor {
  id: string
  name: string
  title: string
  avatar: string
  specialty: Specialty[]
  bio: string
  rating: number
  studentCount: number
  contentCount: {
    articles: number
    videos: number
    courses: number
  }
  isPremium: boolean
}

const mockInstructors: Instructor[] = [
  {
    id: "1",
    name: "玉城 竜一",
    title: "ケアマネジメント専門家",
    avatar: "/avatar1.jpg",
    specialty: ["ケアマネジメント", "認知症ケア"],
    bio: "沖縄県認知症介護指導者。AI時代のケアマネジメントの第一人者",
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
    avatar: "/avatar2.jpg",
    specialty: ["在宅介護", "リハビリ"],
    bio: "20年以上の在宅介護経験を持つベテラン介護福祉士",
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
    avatar: "/avatar3.jpg",
    specialty: ["認知症ケア", "施設介護"],
    bio: "認知症ケア専門士として全国で研修を実施",
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
    avatar: "/avatar4.jpg",
    specialty: ["リハビリ", "在宅介護"],
    bio: "理学療法士として介護現場でのリハビリを専門に指導",
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
    avatar: "/avatar5.jpg",
    specialty: ["施設介護", "ケアマネジメント"],
    bio: "複数の介護施設運営に携わり、現場改革を推進",
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
    avatar: "/avatar6.jpg",
    specialty: ["ケアマネジメント", "認知症ケア"],
    bio: "介護現場での豊富な経験を活かし、実践的な教育プログラムを展開",
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
    avatar: "/avatar7.jpg",
    specialty: ["施設介護", "在宅介護"],
    bio: "沖縄県南城市で介護事業を展開。看護師の経験を活かした質の高いケアを提供（有限会社陽気 取締役）",
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
    avatar: "/avatar8.jpg",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "介護の標準化を目指す「介護のマナ」を開発。介護現場のDX化を推進（株式会社ライフシフト 代表）",
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
    avatar: "/avatar9.jpg",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "介護のマナのカスタマーサクセスマネージャー。琉球大学経済学部出身、開邦高校卒",
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
    avatar: "/avatar10.jpg",
    specialty: ["ケアマネジメント", "施設介護"],
    bio: "元沖縄金融公庫。中小企業の財務支援と創業期融資支援を提供（ユアトリー株式会社 代表取締役）",
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

export default function InstructorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty>("all")
  const [selectedContentType, setSelectedContentType] = useState<ContentType>("all")
  const [sortBy, setSortBy] = useState<"rating" | "students" | "content">("rating")

  const filteredInstructors = useMemo(() => {
    let filtered = [...mockInstructors]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        instructor =>
          instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          instructor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          instructor.bio.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Specialty filter
    if (selectedSpecialty !== "all") {
      filtered = filtered.filter(instructor =>
        instructor.specialty.includes(selectedSpecialty)
      )
    }

    // Content type filter
    if (selectedContentType !== "all") {
      filtered = filtered.filter(instructor => {
        switch (selectedContentType) {
          case "article":
            return instructor.contentCount.articles > 0
          case "video":
            return instructor.contentCount.videos > 0
          case "course":
            return instructor.contentCount.courses > 0
          default:
            return true
        }
      })
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "students":
          return b.studentCount - a.studentCount
        case "content":
          const totalA = a.contentCount.articles + a.contentCount.videos + a.contentCount.courses
          const totalB = b.contentCount.articles + b.contentCount.videos + b.contentCount.courses
          return totalB - totalA
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedSpecialty, selectedContentType, sortBy])

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
          <h1 className="text-4xl font-bold text-center mb-4">講師一覧</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            日本の介護を支える専門家たちから学びましょう。各分野のプロフェッショナルが、実践的な知識と技術を共有します。
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-5" />
            <Input
              type="text"
              placeholder="講師名、専門分野、キーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedSpecialty} onValueChange={(value) => setSelectedSpecialty(value as Specialty)}>
              <SelectTrigger>
                <SelectValue placeholder="専門分野" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべての専門分野</SelectItem>
                <SelectItem value="認知症ケア">認知症ケア</SelectItem>
                <SelectItem value="在宅介護">在宅介護</SelectItem>
                <SelectItem value="施設介護">施設介護</SelectItem>
                <SelectItem value="リハビリ">リハビリ</SelectItem>
                <SelectItem value="ケアマネジメント">ケアマネジメント</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedContentType} onValueChange={(value) => setSelectedContentType(value as ContentType)}>
              <SelectTrigger>
                <SelectValue placeholder="コンテンツタイプ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべてのコンテンツ</SelectItem>
                <SelectItem value="article">記事</SelectItem>
                <SelectItem value="video">動画</SelectItem>
                <SelectItem value="course">コース</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as "rating" | "students" | "content")}>
              <SelectTrigger>
                <SelectValue placeholder="並び替え" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">評価順</SelectItem>
                <SelectItem value="students">受講者数順</SelectItem>
                <SelectItem value="content">コンテンツ数順</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredInstructors.length}名の講師が見つかりました
            </p>
            <Button variant="outline" size="sm" onClick={() => {
              setSearchQuery("")
              setSelectedSpecialty("all")
              setSelectedContentType("all")
              setSortBy("rating")
            }}>
              <Filter className="size-4 mr-2" />
              フィルターをリセット
            </Button>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstructors.map((instructor) => (
            <Card key={instructor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {instructor.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{instructor.name}</CardTitle>
                        <CardDescription className="text-sm">{instructor.title}</CardDescription>
                      </div>
                      {instructor.isPremium && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          プレミアム
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{instructor.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {instructor.specialty.map((spec) => (
                    <Badge key={spec} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <FileText className="size-3 text-muted-foreground" />
                      <span className="text-sm font-semibold">{instructor.contentCount.articles}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">記事</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Video className="size-3 text-muted-foreground" />
                      <span className="text-sm font-semibold">{instructor.contentCount.videos}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">動画</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <BookOpen className="size-3 text-muted-foreground" />
                      <span className="text-sm font-semibold">{instructor.contentCount.courses}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">コース</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{instructor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{instructor.studentCount}名の受講者</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/instructors/${instructor.id}`}>
                    講師の記事を見る
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}