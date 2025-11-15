import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface NewsItem {
  id: string
  date: string
  category: string
  title: string
  tag: string
  content: string
  author: string
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    date: "2025年1月12日",
    category: "道場の取組",
    title: "第219回ケアマネ道場における玉城竜一氏の講演を公開しました",
    tag: "動画",
    author: "編集部",
    content: `第219回ケアマネ道場が開催され、玉城竜一氏による「AI時代のケアマネジメント」をテーマとした講演が行われました。

## 講演の概要

今回の講演では、AI技術が急速に発展する中で、ケアマネジャーが本来の役割をどのように果たしていくべきかについて、深い洞察が共有されました。

### 主な内容

1. **AI時代におけるケアマネジャーの本質的な役割**
   - AIに代替できない人間ならではの価値
   - 利用者との信頼関係の重要性
   - 倫理的判断の必要性

2. **テクノロジーとの向き合い方**
   - AIツールの適切な活用方法
   - 効率化と質の向上の両立
   - 現場での実践例

3. **これからのケアマネジメント**
   - 地域包括ケアシステムにおける役割
   - 多職種連携の重要性
   - 継続的な学びの必要性

## 参加者の声

参加者からは「AI時代だからこそ、人間的な関わりの価値を再認識できた」「具体的な実践例が参考になった」といった声が多数寄せられました。

## 今後の展開

今回の講演内容は、オンライン学習プラットフォームでも順次公開予定です。会員の皆様には、アーカイブ動画として視聴いただけます。`
  },
  {
    id: "2",
    date: "2025年1月12日",
    category: "道場の発見",
    title: "「AI時代のケアマネジメント」に関する高市総理メッセージ",
    tag: "記事",
    author: "編集部",
    content: `高市総理から、AI時代のケアマネジメントに関する重要なメッセージが発表されました。

## メッセージの要旨

政府として、介護分野におけるDX推進を積極的に支援していく方針が示されました。

### 重点施策

1. **介護DXの推進**
   - ICT導入支援の拡充
   - 業務効率化の促進
   - データ活用の推進

2. **人材育成の強化**
   - デジタルスキル研修の充実
   - リカレント教育の支援
   - キャリアアップ支援

3. **質の向上と効率化の両立**
   - エビデンスに基づくケアの実現
   - 業務負担の軽減
   - サービスの質的向上`
  },
  {
    id: "3",
    date: "2025年1月11日",
    category: "道場の一日",
    title: "沖縄県認知症介護指導者による認知症ケア実践研修の完全オンライン化について",
    tag: "写真",
    author: "研修担当",
    content: `沖縄県の認知症介護指導者による実践研修が、完全オンライン化されました。

## オンライン化の背景

コロナ禍をきっかけに、全国どこからでも受講できる環境の整備が求められていました。

### オンライン化のメリット

1. **アクセスの向上**
   - 地理的制約の解消
   - 時間の有効活用
   - 受講機会の拡大

2. **学習効果の向上**
   - 繰り返し視聴が可能
   - 自分のペースで学習
   - 質問・議論の活性化

3. **コスト削減**
   - 移動費用の削減
   - 会場費の削減
   - 効率的な運営`
  },
  {
    id: "4",
    date: "2025年1月10日",
    category: "制度改正",
    title: "令和7年度介護報酬改定のポイント解説",
    tag: "記事",
    author: "制度解説チーム",
    content: `令和7年度の介護報酬改定について、重要なポイントを解説します。

## 改定の基本的な考え方

今回の改定では、以下の3つの柱が示されています。

### 1. 地域包括ケアシステムの深化・推進

地域における医療・介護の連携強化と、在宅サービスの充実が図られます。

### 2. 自立支援・重度化防止の推進

科学的介護の推進と、リハビリテーション・機能訓練の充実が重点項目です。

### 3. 介護人材の確保と生産性向上

処遇改善と、ICT・ロボット等の活用による業務効率化が促進されます。`
  },
  {
    id: "5",
    date: "2025年1月9日",
    category: "DX推進",
    title: "介護現場におけるICT活用の最新事例",
    tag: "記事",
    author: "DX推進チーム",
    content: `全国の介護現場で進むICT活用の最新事例をご紹介します。

## 事例1: タブレット端末による記録の効率化

A法人では、タブレット端末を導入することで、記録業務の時間を50%削減することに成功しました。

## 事例2: 見守りセンサーの活用

B施設では、見守りセンサーの導入により、夜間の巡回業務を効率化し、職員の負担軽減を実現しています。

## 事例3: オンライン研修の実施

C社では、オンライン研修システムを導入し、全職員が時間や場所を問わず学習できる環境を整備しました。`
  }
]

// Generate static params for all news items
export function generateStaticParams() {
  return mockNews.map((news) => ({
    id: news.id,
  }))
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = mockNews.find(n => n.id === id)

  if (!news) {
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
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/login">ログイン</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent text-accent-foreground">{news.tag}</Badge>
            <Badge variant="secondary">{news.category}</Badge>
          </div>

          <h1 className="text-4xl font-bold mb-6 leading-tight">{news.title}</h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <time>{news.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="size-4" />
              <span>{news.author}</span>
            </div>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="aspect-video bg-muted rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Tag className="size-12 mx-auto mb-2" />
            <p className="text-sm">記事画像</p>
          </div>
        </div>

        {/* Article Body */}
        <Card className="border-2">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {news.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 first:mt-0">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')) {
                  return (
                    <p key={index} className="mb-2 font-semibold">
                      {paragraph}
                    </p>
                  )
                } else if (paragraph.startsWith('   -')) {
                  return (
                    <p key={index} className="ml-6 mb-1 text-muted-foreground">
                      • {paragraph.replace('   - ', '')}
                    </p>
                  )
                } else if (paragraph.trim() === '') {
                  return <div key={index} className="h-4" />
                } else {
                  return (
                    <p key={index} className="mb-4 leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </CardContent>
        </Card>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">関連する最新情報</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockNews
              .filter(n => n.id !== id)
              .slice(0, 2)
              .map((relatedNews) => (
                <Link key={relatedNews.id} href={`/news/${relatedNews.id}`}>
                  <Card className="hover:shadow-lg transition-shadow border-2 hover:border-accent h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-accent text-accent-foreground text-xs">{relatedNews.tag}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="size-3" />
                          <time>{relatedNews.date}</time>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {relatedNews.category}
                      </Badge>
                      <h3 className="font-bold leading-snug line-clamp-2">
                        {relatedNews.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  )
}
