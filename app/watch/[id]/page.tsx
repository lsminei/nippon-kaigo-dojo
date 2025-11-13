import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, Clock, Calendar, User, ThumbsUp, Share2, Bookmark, FileText } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Video {
  id: string
  title: string
  description: string
  course: string
  instructor: string
  duration: string
  uploadDate: string
  views: number
  category: string
  transcript: string
  objectives: string[]
  resources: string[]
}

const mockVideos: Video[] = [
  {
    id: "1",
    title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え",
    description: "AI時代のケアマネジメントについて、玉城竜一氏が深く考察します。AIツールが普及する中で、ケアマネジャーとしての本質的な役割とは何か、人間ならではの価値をどう発揮するかについて語ります。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "28:32",
    uploadDate: "2025年1月8日",
    views: 3200,
    category: "ケアマネジメント",
    transcript: `本日は、AI時代のケアマネジメントについてお話しします。

近年、AIケアプラン作成支援ツールが注目を集めています。しかし、私たちケアマネジャーが本当に大切にすべきことは何でしょうか。

AIは確かに効率化やデータ分析において優れた能力を発揮します。しかし、利用者一人ひとりの人生や想いに寄り添うこと、そして倫理的な判断を行うことは、人間にしかできません。

私たちは、AIという新しいツールを活用しながらも、ケアマネジメントの本質を見失わないようにする必要があります。`,
    objectives: [
      "AI時代におけるケアマネジャーの役割を理解する",
      "AIツールの適切な活用方法を学ぶ",
      "人間ならではの価値を再認識する",
      "利用者中心のケアマネジメントの重要性を理解する"
    ],
    resources: [
      "AI活用ガイドライン（PDF）",
      "ケアマネジメント実践チェックリスト",
      "事例検討ワークシート"
    ]
  },
  {
    id: "2",
    title: "なぜこの考え方に？ケアマネ論、倫理",
    description: "ケアマネジメントの倫理について、実践的な事例を交えながら解説します。なぜこの考え方が重要なのか、現場での判断に迷ったときにどう考えるべきかを学びます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "32:15",
    uploadDate: "2025年1月5日",
    views: 2850,
    category: "ケアマネジメント",
    transcript: `ケアマネジメントにおける倫理的判断について考えていきましょう。

現場では、さまざまな価値観や利害が交錯します。利用者の希望、家族の想い、医療・介護職の専門的判断、制度的な制約など、多くの要素を考慮しなければなりません。

そのような中で、私たちが常に立ち返るべきは「利用者の最善の利益」です。しかし、それは単純に利用者の希望を全て叶えることではありません。

専門職として、長期的な視点や安全性、そして尊厳の保持など、多角的に考える必要があります。`,
    objectives: [
      "ケアマネジメントの倫理原則を理解する",
      "倫理的ジレンマへの対処方法を学ぶ",
      "利用者の最善の利益について考える",
      "多職種連携における倫理的配慮を理解する"
    ],
    resources: [
      "倫理的判断のフレームワーク（PDF）",
      "事例検討シート",
      "倫理綱領ガイド"
    ]
  },
  {
    id: "3",
    title: "教育とメタ認知リフレクション　学び方",
    description: "効果的な学習方法について、メタ認知とリフレクションの視点から解説します。自分の学びを客観的に振り返り、より深い理解につなげる方法を学びます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "25:08",
    uploadDate: "2025年1月3日",
    views: 2340,
    category: "学習方法",
    transcript: `今日は、学び方について考えていきます。

私たちは日々、多くのことを学んでいます。しかし、ただ情報を得るだけでは真の学びにはなりません。

重要なのは、自分の思考プロセスを客観的に観察する「メタ認知」と、経験を振り返る「リフレクション」です。

自分がどのように考え、何を理解し、何がまだわからないのか。それを意識的に振り返ることで、学びの質が大きく変わります。`,
    objectives: [
      "メタ認知の概念と重要性を理解する",
      "効果的なリフレクションの方法を学ぶ",
      "学習の質を高める実践的な技法を習得する",
      "継続的な成長のための習慣を身につける"
    ],
    resources: [
      "リフレクションノートテンプレート",
      "学習記録シート",
      "メタ認知チェックリスト"
    ]
  },
  {
    id: "4",
    title: "スキルのお話し　スキルは言語化",
    description: "スキルの本質とその言語化について解説します。暗黙知を形式知に変え、他者と共有できる形にすることの重要性を学びます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "30:45",
    uploadDate: "2025年1月1日",
    views: 2120,
    category: "スキル開発",
    transcript: `スキルについて、深く考えてみましょう。

多くの熟練者は、自分のスキルを「なんとなく」「感覚的に」と表現します。しかし、それでは他者に伝えることも、自分自身で向上させることも難しくなります。

スキルを言語化することで、何が重要なのか、どのようなプロセスで判断しているのかが明確になります。

これは、自己成長だけでなく、後進の育成や多職種との連携においても非常に重要です。`,
    objectives: [
      "スキルの構造を理解する",
      "暗黙知を形式知に変換する方法を学ぶ",
      "スキルの言語化の重要性を認識する",
      "効果的な技術伝承の方法を習得する"
    ],
    resources: [
      "スキル分析ワークシート",
      "言語化トレーニングガイド",
      "技術伝承チェックリスト"
    ]
  }
]

const relatedVideos = [
  { id: "2", title: "なぜこの考え方に？ケアマネ論、倫理", duration: "32:15", views: 2850 },
  { id: "3", title: "教育とメタ認知リフレクション　学び方", duration: "25:08", views: 2340 },
  { id: "4", title: "スキルのお話し　スキルは言語化", duration: "30:45", views: 2120 }
]

// Generate static params for all videos
export function generateStaticParams() {
  return mockVideos.map((video) => ({
    id: video.id,
  }))
}

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const video = mockVideos.find(v => v.id === id)

  if (!video) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">国のため、道のため、人のため</div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
            {/* Video Player */}
            <Card className="border-2 overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="size-20 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-accent/90 transition-colors cursor-pointer">
                      <Play className="size-10 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                    <p className="text-white text-sm">動画を再生</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{video.course}</Badge>
                <Badge className="bg-accent text-accent-foreground">{video.category}</Badge>
              </div>

              <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>{video.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <time>{video.uploadDate}</time>
                </div>
                <div>
                  <span>{video.views}回視聴</span>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="size-4 mr-2" />
                  いいね
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="size-4 mr-2" />
                  共有
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="size-4 mr-2" />
                  保存
                </Button>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  <p className="leading-relaxed text-foreground">{video.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="transcript" className="space-y-4">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="transcript">文字起こし</TabsTrigger>
                <TabsTrigger value="objectives">学習目標</TabsTrigger>
                <TabsTrigger value="resources">資料</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>文字起こし</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {video.transcript.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index} className="leading-relaxed text-foreground">
                          {paragraph}
                        </p>
                      ) : (
                        <div key={index} className="h-2" />
                      )
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="objectives">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>この動画で学べること</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {video.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="size-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>ダウンロード資料</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {video.resources.map((resource, index) => (
                        <li key={index}>
                          <Button variant="outline" className="w-full justify-start" asChild>
                            <a href="#" download>
                              <FileText className="size-4 mr-2" />
                              {resource}
                            </a>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Instructor Info */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {video.instructor.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{video.instructor}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      ケアマネジメント専門家、沖縄県認知症介護指導者
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/instructors/1">講師ページを見る</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="space-y-4">
            <h2 className="font-bold text-xl">関連動画</h2>
            <div className="space-y-4">
              {relatedVideos.filter(v => v.id !== id).map((relatedVideo) => (
                <Link key={relatedVideo.id} href={`/watch/${relatedVideo.id}`}>
                  <Card className="hover:shadow-lg transition-shadow border-2 hover:border-accent">
                    <div className="flex gap-3 p-3">
                      <div className="w-40 aspect-video bg-muted rounded flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center rounded" />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                          {relatedVideo.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-2 leading-snug">
                          {relatedVideo.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{video.instructor}</p>
                        <p className="text-xs text-muted-foreground">{relatedVideo.views}回視聴</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
