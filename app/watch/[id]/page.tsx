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
    id: "1_1",
    title: "ケアマネジメントとは何か",
    description: "ケアマネジメントの基本概念と、AI時代における役割について学びます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "18:32",
    uploadDate: "2025年1月8日",
    views: 3200,
    category: "ケアマネジメント",
    transcript: `本日は、ケアマネジメントの基本についてお話しします。

ケアマネジメントとは、単なる「サービスの調整」ではありません。それは、利用者の人生の物語に寄り添い、その人らしい生活を支援するための専門的な実践です。

私たちケアマネジャーは、利用者と様々なサービス、そして地域資源を結びつける「翻訳者」としての役割を担っています。

この講座では、ケアマネジメントの本質を一緒に学んでいきましょう。`,
    objectives: [
      "ケアマネジメントの基本概念を理解する",
      "ケアマネジャーの役割と責任を学ぶ",
      "利用者中心のアプローチの重要性を理解する"
    ],
    resources: [
      "ケアマネジメント基本テキスト（PDF）",
      "ケアマネジメント倫理綱領"
    ]
  },
  {
    id: "1_2",
    title: "AI時代の変化と課題",
    description: "AI時代のケアマネジメントについて、玉城竜一氏が深く考察します。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "22:15",
    uploadDate: "2025年1月8日",
    views: 2850,
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
      "参考資料：厚生労働省AIケアプラン指針"
    ]
  },
  {
    id: "1_3",
    title: "人間にしかできない価値",
    description: "ケアマネジャーとして人間にしかできない価値について考えます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "25:48",
    uploadDate: "2025年1月7日",
    views: 2600,
    category: "ケアマネジメント",
    transcript: "人間にしかできない価値について深く考察します...",
    objectives: [
      "人間ならではの価値を理解する",
      "共感と倫理的判断の重要性を学ぶ"
    ],
    resources: [
      "実践事例集（PDF）"
    ]
  },
  {
    id: "1_4",
    title: "これからのケアマネジャー像",
    description: "これからの時代に求められるケアマネジャー像について考えます。",
    course: "ケアマネ道場",
    instructor: "玉城 竜一",
    duration: "20:12",
    uploadDate: "2025年1月6日",
    views: 2400,
    category: "ケアマネジメント",
    transcript: "これからのケアマネジャーに求められる資質について...",
    objectives: [
      "未来のケアマネジャー像を理解する",
      "継続的な成長の重要性を学ぶ"
    ],
    resources: [
      "キャリア開発ガイド（PDF）"
    ]
  },
  {
    id: "2_1",
    title: "在宅介護とは",
    description: "在宅介護の基本的な考え方と重要性について学びます。",
    course: "在宅介護実践コース",
    instructor: "山田 花子",
    duration: "15:20",
    uploadDate: "2025年1月5日",
    views: 1800,
    category: "在宅介護",
    transcript: "在宅介護の基本について解説します...",
    objectives: [
      "在宅介護の基本概念を理解する",
      "在宅での支援の特徴を学ぶ"
    ],
    resources: [
      "在宅介護ガイドブック（PDF）"
    ]
  },
  {
    id: "2_2",
    title: "利用者理解の重要性",
    description: "利用者を深く理解することの重要性について学びます。",
    course: "在宅介護実践コース",
    instructor: "山田 花子",
    duration: "18:45",
    uploadDate: "2025年1月4日",
    views: 1600,
    category: "在宅介護",
    transcript: "利用者理解のポイントについて...",
    objectives: [
      "利用者理解の方法を学ぶ",
      "個別性を尊重した支援を理解する"
    ],
    resources: [
      "アセスメントシート（PDF）"
    ]
  }
]

// Helper function to get related videos for a given video ID
function getRelatedVideos(videoId: string): RelatedVideo[] {
  const courseId = videoId.split('_')[0]
  return mockVideos
    .filter(v => v.id.startsWith(`${courseId}_`) && v.id !== videoId)
    .slice(0, 5)
    .map(v => ({
      id: v.id,
      title: v.title,
      duration: v.duration,
      views: v.views
    }))
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

  const related = getRelatedVideos(id)

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
