import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, User, Clock, BookmarkPlus, Share2, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    id: string
    name: string
    title: string
  }
  category: string
  publishDate: string
  readTime: string
  views: number
  tags: string[]
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "沖縄県の介護DX推進における取り組みと成果",
    excerpt: "沖縄県における介護DXの先進的な取り組みについて詳しく解説します。",
    author: {
      id: "1",
      name: "玉城 竜一",
      title: "ケアマネジメント専門家"
    },
    category: "DX推進",
    publishDate: "令和7年1月10日",
    readTime: "8分",
    views: 856,
    tags: ["DX", "介護現場", "沖縄県", "ICT活用"],
    content: `沖縄県では、全国に先駆けて介護DXの推進に取り組んできました。本記事では、その具体的な取り組みと成果について報告します。

## 背景と課題

日本全国で介護人材の不足が深刻化する中、沖縄県も同様の課題に直面していました。限られた人材で質の高いケアを提供するためには、業務の効率化と質の向上を両立させる必要がありました。

### 主な課題

1. **記録業務の負担**
   - 手書きの記録に多くの時間を費やしていた
   - 情報共有に時間がかかる
   - 記録の検索や分析が困難

2. **人材育成の効率化**
   - 集合研修の実施が困難
   - 地理的制約による学習機会の格差
   - 継続的な学習の仕組みの不足

3. **サービスの質の確保**
   - 個別ケアの標準化
   - エビデンスに基づくケアの実践
   - 効果測定の困難さ

## 取り組みの概要

沖縄県では、以下の3つの柱で介護DX を推進してきました。

### 1. ICTツールの導入支援

介護事業所におけるタブレット端末やケア記録システムの導入を支援。県独自の補助金制度を設け、中小規模の事業所でも導入しやすい環境を整備しました。

**主な成果：**
- 導入事業所数：250施設（令和6年度末時点）
- 記録業務時間の削減：平均40%
- 情報共有の迅速化：即時共有が可能に

### 2. オンライン研修システムの構築

全国初の試みとして、ケアマネジャー法定研修の完全オンライン化を実現。地理的制約を超えて、質の高い研修を提供できる体制を構築しました。

**主な成果：**
- 受講者の移動時間削減：平均3時間/回
- 受講費用の削減：約30%
- 受講満足度：95%以上

### 3. データ活用の推進

介護現場で蓄積されるデータを分析し、ケアの質向上に活用する仕組みを構築。科学的介護（LIFE）の活用を推進し、エビデンスに基づくケアを実践しています。

**主な成果：**
- LIFE参加事業所：180施設
- ケアの質の向上：利用者満足度10%向上
- 介護度の改善：軽度化率15%向上

## 成功のポイント

沖縄県の取り組みが成功した要因として、以下の点が挙げられます。

### 1. トップダウンとボトムアップの両立

県の強力なリーダーシップのもと、現場の声を丁寧に拾い上げながら施策を展開しました。

### 2. 段階的な導入

いきなり全面導入するのではなく、モデル事業所での検証を経て、段階的に展開しました。

### 3. 継続的なサポート体制

導入後のフォローアップを重視し、相談窓口の設置や訪問支援を実施しました。

### 4. 人材育成との連動

ICTツールの導入だけでなく、それを使いこなす人材の育成も同時に進めました。

## 今後の展望

沖縄県の介護DXは、まだ道半ばです。今後は以下の取り組みを推進していきます。

### 1. AI・ロボット技術の活用

見守りセンサーや介護ロボットの導入を推進し、夜間の見守り業務や移乗介助の負担軽減を図ります。

### 2. データ連携基盤の構築

医療・介護・福祉のデータを連携させ、切れ目のないサービス提供を実現します。

### 3. 人材確保・定着の促進

働きやすい職場環境を整備し、介護人材の確保と定着を図ります。

## まとめ

沖縄県の介護DX推進の取り組みは、全国のモデルとなり得るものです。重要なのは、ICTはあくまでも手段であり、目的は「利用者の幸せ」と「職員の働きがいのある職場づくり」であることを忘れないことです。

テクノロジーを活用しながらも、人と人とのつながりを大切にする。そんな介護の未来を、沖縄県から発信していきたいと考えています。`
  },
  {
    id: "2",
    title: "ケアマネ法定研修の完全オンライン化の実現について",
    excerpt: "コロナ禍をきっかけに実現した、全国初のケアマネ法定研修オンライン化の経緯。",
    author: {
      id: "1",
      name: "玉城 竜一",
      title: "ケアマネジメント専門家"
    },
    category: "教育改革",
    publishDate: "令和7年1月9日",
    readTime: "10分",
    views: 1032,
    tags: ["オンライン研修", "ケアマネジャー", "法定研修", "教育DX"],
    content: `令和2年、新型コロナウイルス感染症の拡大により、従来の集合型研修の実施が困難になりました。この危機を機会と捉え、沖縄県では全国初となるケアマネジャー法定研修の完全オンライン化を実現しました。

## 実現までの道のり

### 従来の課題

ケアマネジャーの法定研修は、対面での実施が義務付けられていました。しかし、沖縄県の地理的特性から、以下のような課題がありました：

1. **離島からの参加の困難さ**
   - 往復の移動時間：最大8時間以上
   - 宿泊費の負担：1回あたり2〜3万円
   - 業務調整の困難さ

2. **研修機会の不足**
   - 受講定員の制限
   - 日程調整の困難さ
   - 再受講の機会が限られる

3. **研修の質のばらつき**
   - 講師による差
   - 受講者数による質の変動
   - フィードバックの限界

### コロナ禍での決断

令和2年3月、緊急事態宣言が発令され、すべての集合研修が中止となりました。しかし、ケアマネジャーの法定研修は、資格更新に必須であり、中止することはできません。

そこで私たちは、「ピンチをチャンスに変える」決断をしました。

## オンライン化のプロセス

### 1. 制度的な壁の突破

まず直面したのは、法定研修のオンライン実施が認められていないという制度的な壁でした。

**取り組み：**
- 厚生労働省への要望書提出
- 特例措置の獲得
- ガイドラインの策定

### 2. システムの構築

オンライン研修を実現するために、以下のシステムを構築しました。

**主な機能：**
- リアルタイム配信システム
- グループワーク機能
- 出席確認システム
- アンケート・理解度チェック
- アーカイブ視聴機能

### 3. コンテンツの再設計

単に対面研修をオンライン化するのではなく、オンラインの特性を活かしたコンテンツに再設計しました。

**工夫点：**
- 動画コンテンツの事前学習
- 双方向のディスカッション
- 実践演習のオンライン化
- 個別フィードバックの充実

### 4. サポート体制の整備

ICT に不慣れな受講者もいるため、丁寧なサポート体制を構築しました。

**サポート内容：**
- 事前説明会の実施
- 操作マニュアルの配布
- 当日のテクニカルサポート
- 個別相談窓口の設置

## 実施結果と効果

令和2年度から3年間で、延べ2,500名以上がオンライン研修を受講しました。

### 量的な成果

1. **受講者数の増加**
   - 前年度比150%
   - 再受講者の増加
   - 離島からの参加増

2. **コスト削減**
   - 受講者の負担：約60%削減
   - 運営コスト：約40%削減

3. **時間の効率化**
   - 移動時間の削減：年間延べ5,000時間
   - 業務調整の容易化

### 質的な成果

1. **学習効果の向上**
   - 受講満足度：95%以上
   - 理解度テスト：平均点10%向上
   - 復習機会の増加

2. **双方向性の向上**
   - チャット機能による質問の活性化
   - グループワークの充実
   - 講師とのコミュニケーション増加

3. **継続的な学習**
   - アーカイブ視聴による復習
   - 職場での共有学習
   - 実践への活用

## 成功の要因

### 1. 受講者中心の設計

単なるオンライン化ではなく、受講者の学習効果を最大化することを目指しました。

### 2. 丁寧なサポート

ICT に不安を感じる受講者にも配慮し、きめ細かなサポートを提供しました。

### 3. 継続的な改善

受講者のフィードバックを基に、継続的に改善を重ねました。

### 4. 関係者の協力

行政、研修実施機関、講師、受講者が一体となって取り組みました。

## 今後の展望

オンライン研修は、「コロナ後」も継続していきます。対面とオンラインのハイブリッド型で、それぞれの利点を活かした研修体系を構築していきます。

### ハイブリッド型研修のビジョン

1. **基礎学習：オンライン**
   - 知識の習得
   - 事前学習
   - 復習・振り返り

2. **実践学習：対面**
   - 演習・ロールプレイ
   - グループワーク
   - ネットワーキング

3. **フォローアップ：オンライン**
   - 実践報告
   - 継続学習
   - コミュニティ形成

## おわりに

ケアマネ法定研修の完全オンライン化は、コロナ禍という困難な状況から生まれたイノベーションです。

「できない理由」を探すのではなく、「どうすればできるか」を考える。そんな前向きな姿勢が、新しい価値を生み出しました。

この経験は、介護業界全体のDX推進にも活かせると確信しています。テクノロジーを恐れず、積極的に活用することで、より良いケアと働きやすい環境を実現できるはずです。`
  },
  {
    id: "3",
    title: "地域密着型サービスにおける統括管理の実践事例",
    excerpt: "居宅、小規模、GHの統括管理における実践的なノウハウを紹介します。",
    author: {
      id: "5",
      name: "中村 太郎",
      title: "施設運営コンサルタント"
    },
    category: "実践報告",
    publishDate: "令和7年1月8日",
    readTime: "12分",
    views: 623,
    tags: ["統括管理", "地域密着型", "マネジメント", "実践事例"],
    content: `地域密着型サービスの統括管理について、実践事例を交えながら解説します。

## 統括管理の重要性

地域密着型サービスでは、複数の事業所を効率的に運営する統括管理が重要です。

### 統括管理のメリット

1. **経営効率の向上**
   - 人材の有効活用
   - コストの最適化
   - リスク管理の強化

2. **サービスの質の向上**
   - ノウハウの共有
   - 標準化と個別化の両立
   - 継続的な改善

3. **職員の成長支援**
   - キャリアパスの明確化
   - 相互学習の機会
   - モチベーション向上

## 実践事例：A法人の取り組み

A法人では、居宅介護支援事業所2か所、小規模多機能型居宅介護1か所、グループホーム2か所を運営しています。

### 組織体制

**統括責任者の役割：**
- 全体の経営方針の策定
- 各事業所の連携調整
- 人材育成計画の立案
- 品質管理と改善

**各事業所の管理者：**
- 日々の運営管理
- スタッフマネジメント
- 利用者対応
- 統括責任者への報告

### 具体的な取り組み

#### 1. 情報共有の仕組み

**週次ミーティング：**
- 各事業所の状況報告
- 課題の共有と解決策の検討
- 好事例の水平展開

**月次報告：**
- 利用状況の分析
- 収支の確認
- 改善計画の策定

#### 2. 人材の流動化

**配置転換の実施：**
- スキルアップの機会提供
- 人員不足への柔軟な対応
- モチベーション維持

**研修体系：**
- 階層別研修
- 職種別研修
- OJT の充実

#### 3. 品質管理

**統一基準の策定：**
- ケアの標準化
- 記録様式の統一
- リスク管理指針

**内部監査：**
- 定期的なチェック
- 改善提案
- フォローアップ

## 成果と課題

### 成果

1. **経営の安定化**
   - 稼働率の向上：平均95%
   - 離職率の低下：30%削減
   - 収益性の改善：15%向上

2. **サービスの質向上**
   - 利用者満足度：90%以上
   - 家族満足度：85%以上
   - クレーム減少：50%削減

3. **職員の成長**
   - スキルアップの実感：80%
   - やりがいの向上：75%
   - キャリア展望：明確化

### 課題

1. **事業所間の調整**
   - 特性の違いへの配慮
   - 柔軟な対応の必要性

2. **統括責任者の負担**
   - 業務量の多さ
   - 専門性の要求度

3. **システム整備**
   - ICT活用の推進
   - 情報セキュリティ

## まとめ

地域密着型サービスの統括管理は、経営の効率化とサービスの質向上を両立させる重要な取り組みです。

成功のポイントは、統括と現場のバランス、情報共有の仕組み、そして人材育成です。`
  }
]

// Generate static params for all articles
export function generateStaticParams() {
  return mockArticles.map((article) => ({
    id: article.id,
  }))
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = mockArticles.find(a => a.id === id)

  if (!article) {
    notFound()
  }

  const relatedArticles = mockArticles.filter(a => a.id !== id).slice(0, 2)

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

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-bold mb-6 leading-tight">{article.title}</h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <time>{article.publishDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>{article.readTime}で読めます</span>
            </div>
            <span>{article.views}回閲覧</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Button variant="outline" size="sm">
              <ThumbsUp className="size-4 mr-2" />
              いいね
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="size-4 mr-2" />
              保存
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="size-4 mr-2" />
              共有
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Card */}
        <Card className="border-2 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-16 bg-primary text-primary-foreground">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                  {article.author.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">著者</p>
                <h3 className="font-bold text-lg">{article.author.name}</h3>
                <p className="text-sm text-muted-foreground">{article.author.title}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href={`/instructors/${article.author.id}`}>プロフィール</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Body */}
        <Card className="border-2 mb-12">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
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
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold mb-3 mt-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                } else if (paragraph.match(/^\d+\./)) {
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
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <p key={index} className="ml-4 mb-2">
                      • {paragraph.replace('- ', '')}
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

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/article/${relatedArticle.id}`}>
                <Card className="hover:shadow-lg transition-shadow border-2 hover:border-accent h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-3 text-xs">{relatedArticle.category}</Badge>
                    <h3 className="font-bold text-lg mb-2 leading-snug line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <time>{relatedArticle.publishDate}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
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
