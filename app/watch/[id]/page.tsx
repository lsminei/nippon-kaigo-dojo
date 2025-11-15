import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { VideoContent } from "@/components/VideoContent"

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

interface RelatedVideo {
  id: string
  title: string
  duration: string
  views: number
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
      "ケアマネジメント倫理綱領",
      "参考資料：厚生労働省AIケアプラン指針"
    ]
  },
  {
    id: "2",
    title: "なぜこの考え方に？ケアマネ論、倫理",
    description: "ケアマネジメントの倫理と哲学について深く掘り下げます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "32:15",
    uploadDate: "2025年1月5日",
    views: 2850,
    category: "ケアマネジメント",
    transcript: "ケアマネジメントの倫理について考察します...",
    objectives: [
      "ケアマネジメント倫理の基礎を学ぶ",
      "実践における倫理的ジレンマへの対処法を理解する"
    ],
    resources: [
      "倫理ガイドライン",
      "事例集"
    ]
  },
  {
    id: "3",
    title: "ケアマネ法定研修の完全オンライン化",
    description: "全国に先駆けて実現した沖縄県のケアマネ法定研修オンライン化の取り組み。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "35:20",
    uploadDate: "2025年1月3日",
    views: 2400,
    category: "DX推進",
    transcript: "法定研修のオンライン化について...",
    objectives: [
      "オンライン研修の効果を理解する",
      "DX推進のポイントを学ぶ"
    ],
    resources: [
      "オンライン研修ガイド"
    ]
  },
  {
    id: "4",
    title: "地域包括ケアシステムの実践",
    description: "地域包括ケアシステムの構築と実践について学びます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "30:45",
    uploadDate: "2025年1月1日",
    views: 2100,
    category: "地域ケア",
    transcript: "地域包括ケアシステムについて...",
    objectives: [
      "地域包括ケアの概念を理解する",
      "多職種連携の重要性を学ぶ"
    ],
    resources: [
      "地域ケアガイドライン"
    ]
  }
]

const relatedVideos: Record<string, RelatedVideo[]> = {
  "1": [
    { id: "2", title: "なぜこの考え方に？ケアマネ論、倫理", duration: "32:15", views: 2850 },
    { id: "3", title: "ケアマネ法定研修の完全オンライン化", duration: "35:20", views: 2400 },
    { id: "4", title: "地域包括ケアシステムの実践", duration: "30:45", views: 2100 }
  ],
  "2": [
    { id: "1", title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え", duration: "28:32", views: 3200 },
    { id: "3", title: "ケアマネ法定研修の完全オンライン化", duration: "35:20", views: 2400 },
    { id: "4", title: "地域包括ケアシステムの実践", duration: "30:45", views: 2100 }
  ],
  "3": [
    { id: "1", title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え", duration: "28:32", views: 3200 },
    { id: "2", title: "なぜこの考え方に？ケアマネ論、倫理", duration: "32:15", views: 2850 },
    { id: "4", title: "地域包括ケアシステムの実践", duration: "30:45", views: 2100 }
  ],
  "4": [
    { id: "1", title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え", duration: "28:32", views: 3200 },
    { id: "2", title: "なぜこの考え方に？ケアマネ論、倫理", duration: "32:15", views: 2850 },
    { id: "3", title: "ケアマネ法定研修の完全オンライン化", duration: "35:20", views: 2400 }
  ]
}

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

  const related = relatedVideos[id] || []

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

      <VideoContent video={video} relatedVideos={related} />
    </div>
  )
}
