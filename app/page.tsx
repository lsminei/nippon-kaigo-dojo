import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Star, Play, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import HeroSlider from "@/components/HeroSlider"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-accent bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 text-xs text-center">{"国のため、道のため、人のため"}</div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="font-bold text-xl text-foreground tracking-wide">{"NIPPON介護道場"}</div>
              <div className="text-xs text-muted-foreground">{"日本の介護を、誇りある道へ。"}</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#news"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"最新情報"}
            </Link>
            <Link
              href="#courses"
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
              href="#pricing"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {"参加費用"}
            </Link>
            <Link
              href="#about"
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

      <HeroSlider />

      {/* Latest News Section */}
      <section id="news" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{"最新情報"}</h2>
            <Button variant="link" className="text-accent">
              {"一覧を見る"}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: "2025年1月12日",
                category: "道場の取組",
                title: "第219回ケアマネ道場における玉城竜一氏の講演を公開しました",
                image: "lecture",
                tag: "動画",
              },
              {
                date: "2025年1月12日",
                category: "道場の発見",
                title: "「AI時代のケアマネジメント」に関する高市総理メッセージ",
                image: "message",
                tag: "記事",
              },
              {
                date: "2025年1月12日",
                category: "道場の一日",
                title: "沖縄県認知症介護指導者による認知症ケア実践研修の完全オンライン化について",
                image: "training",
                tag: "写真",
              },
            ].map((news, i) => (
              <Link key={i} href={`/news/${i + 1}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full">
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 bg-primary/20" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-accent text-accent-foreground">{news.tag}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="size-3" />
                      <time>{news.date}</time>
                    </div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {news.category}
                    </Badge>
                    <h3 className="font-bold text-base leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{"道場の取組"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/article/1">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer h-full">
                <div className="relative aspect-[16/9] bg-muted">
                  <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{"特集動画"}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="size-3" />
                    <time>{"令和7年1月10日"}</time>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                    {"第219回ケアマネ道場における玉城竜一氏の講演"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"AIとケアマネジメントの未来について、沖縄県認知症介護指導者の玉城竜一氏が詳しく解説します。"}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Play className="size-4 text-accent" />
                      {"28:32"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-4" />
                      {"1,245回視聴"}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            <div className="space-y-6">
              {[
                {
                  date: "令和7年1月9日",
                  title: "沖縄県の介護DX推進における取り組みと成果",
                  category: "DX推進",
                  views: "856",
                },
                {
                  date: "令和7年1月8日",
                  title: "ケアマネ法定研修の完全オンライン化の実現について",
                  category: "教育改革",
                  views: "1,032",
                },
                {
                  date: "令和7年1月7日",
                  title: "地域密着型サービスにおける統括管理の実践事例",
                  category: "実践報告",
                  views: "623",
                },
              ].map((article, i) => (
                <Link key={i} href={`/article/${i + 2}`}>
                  <Card className="p-5 hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="flex gap-4">
                      <div className="size-24 bg-primary/10 rounded flex-shrink-0 flex items-center justify-center">
                        <BookOpen className="size-10 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="size-3" />
                          <time>{article.date}</time>
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {article.category}
                        </Badge>
                        <h4 className="font-bold text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Users className="size-3" />
                          {article.views}回視聴
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground border-y-4 border-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/japanese-dojo-interior-dark-atmospheric.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Star className="size-4" />
              {"私たちの理念"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance leading-tight">
              {"国のため、道のため、人のため"}
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>{"日本の介護を支えている。日本人の暮らしを支えている。"}</p>
              <p className="text-2xl font-bold mt-6">{"介護職に誇りが持てる社会へ。"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{"道場シリーズ"}</h2>
            <p className="text-xl text-muted-foreground">{"月額1,800円で全コンテンツ見放題"}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "ケアマネ道場",
                desc: "玉城竜一氏が語る、ケアマネジメントの本質とAI時代のあり方",
                videos: "5本の動画",
                duration: "合計2時間28分",
                featured: true,
              },
              {
                title: "介護福祉士道場",
                desc: "介護技術と専門知識の習得",
                videos: "32本の動画",
                duration: "合計12時間",
              },
              {
                title: "介護職員初任者研修道場",
                desc: "基礎から学ぶ介護の心得",
                videos: "18本の動画",
                duration: "合計6時間",
              },
              {
                title: "介護事務道場",
                desc: "請求業務と事務処理の効率化",
                videos: "20本の動画",
                duration: "合計7時間",
              },
              { title: "サ責道場", desc: "サービス提供責任者の実務", videos: "22本の動画", duration: "合計9時間" },
              { title: "管理者道場", desc: "組織運営とマネジメント力", videos: "28本の動画", duration: "合計10時間" },
              { title: "介護倫理道場", desc: "倫理観と価値観を磨く", videos: "15本の動画", duration: "合計5時間" },
              { title: "介護ニュース", desc: "最新の業界動向と制度改正", videos: "45本の記事", duration: "毎週更新" },
            ].map((course, i) => (
              <Link key={i} href={`/course/${i + 1}`}>
                <Card
                  className={`p-6 hover:shadow-xl transition-all cursor-pointer group h-full border-2 ${
                    course.featured ? "border-accent ring-4 ring-accent/20" : "hover:border-accent"
                  }`}
                >
                  <div className="aspect-square bg-primary/5 rounded-lg mb-4 flex items-center justify-center relative group-hover:bg-primary/10 transition-colors">
                    <Play className="size-12 text-primary" />
                    {course.featured && (
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-bold">
                        {"第一弾"}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{course.desc}</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Play className="size-3" />
                      {course.videos}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {course.duration}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{"ケアマネ道場 講師紹介"}</h2>
              <p className="text-muted-foreground">{"第一弾コンテンツ"}</p>
            </div>
            <Card className="p-8 md:p-12 border-4 border-accent/20">
              <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
                <div className="w-60 aspect-square bg-primary rounded-2xl flex items-center justify-center mx-auto md:mx-0 border-4 border-accent">
                  <span className="text-primary-foreground font-bold text-8xl">玉</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{"玉城竜一"}</h3>
                  <p className="text-lg text-muted-foreground mb-1">{"社会福祉法人幸仁会比謝川の里"}</p>
                  <p className="text-lg text-muted-foreground mb-6">{"介護統括部長 / 沖縄県認知症介護指導者"}</p>
                  <div className="space-y-4 leading-relaxed">
                    <p>
                      {
                        "介護福祉士、ケアマネジャー。地域密着型サービスの統括管理（居宅、小規模、GH）とデイ管理者を経験しながら、嘉手納町の委託事業などを管理。"
                      }
                    </p>
                    <p>
                      {
                        "コロナ禍の沖縄県において、ケアマネ法定研修の完全オンライン化を全国に先駆けて手がけ、翌年には認知症実践者等研修や地域密着型研修の完全オンライン化に携わる。沖縄の介護福祉業界のDXを目指している。"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{"ケアマネ道場で学べる内容"}</h2>
              <p className="text-lg text-muted-foreground">{"全5本の講義動画"}</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  number: "第1講",
                  title: "ケアプランAIの中に入ろうとしている人　玉城さんの考え",
                  desc: "AI時代におけるケアマネジャーの役割と価値について",
                  duration: "28:32",
                },
                {
                  number: "第2講",
                  title: "なぜこの考え方に？ケアマネ論、倫理",
                  desc: "ケアマネジメントの本質的な考え方と倫理的な視点",
                  duration: "32:15",
                },
                {
                  number: "第3講",
                  title: "教育とメタ認知リフレクション　学び方",
                  desc: "効果的な学習方法と自己省察の重要性",
                  duration: "25:08",
                },
                {
                  number: "第4講",
                  title: "スキルのお話し　スキルは言語化",
                  desc: "暗黙知を形式知に変える、スキルの言語化技術",
                  duration: "30:45",
                },
                {
                  number: "第5講",
                  title: "インプットしたものをAI活用してアウトプット　アセス・プランへ反映",
                  desc: "AIを活用した効率的なアセスメントとケアプラン作成",
                  duration: "31:52",
                },
              ].map((topic, i) => (
                <Link key={i} href={`/watch/${i + 1}`}>
                  <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-accent group cursor-pointer">
                    <div className="flex gap-4 items-start">
                      <div className="size-16 bg-accent text-accent-foreground rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {topic.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-accent transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{topic.desc}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="size-4 text-accent" />
                          <span>{topic.duration}</span>
                        </div>
                      </div>
                      <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Play className="size-6 text-primary" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden border-y-4 border-accent">
        <div className="absolute inset-0 bg-[url('/japanese-calligraphy-scroll-washi-paper.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-7xl mb-8 opacity-30 text-accent">"</div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 text-balance leading-relaxed">
              {"道を極めたいものが、正当に評価され、存在が際立つ時代へ。"}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-accent" />
              <cite className="text-lg not-italic font-medium">{"玉城竜一"}</cite>
              <div className="h-px w-16 bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{"参加費用"}</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{"あなたの未来への投資"}</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-4 border-accent shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-accent" />
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{"プロフェッショナル"}</h3>
                <p className="text-muted-foreground">{"社会人向けプラン"}</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-accent mb-2">
                  {"¥1,800"}
                  <span className="text-2xl text-muted-foreground font-normal">{" / 月"}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {["全8道場シリーズ見放題", "月額定額制", "いつでも解約可能", "新着コンテンツ優先アクセス"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <div className="size-3 rounded-full bg-accent" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                <Link href="/login">{"今すぐ始める"}</Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 hover:border-accent transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{"スチューデント"}</h3>
                <p className="text-muted-foreground">{"学生向けプラン"}</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-2">
                  {"¥500"}
                  <span className="text-2xl text-muted-foreground font-normal">{" / 月"}</span>
                </div>
                <p className="text-xs text-muted-foreground">{"※学生証の提示が必要です"}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {["全8道場シリーズ見放題", "学生限定特別価格", "いつでも解約可能", "新着コンテンツアクセス"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="size-3 rounded-full bg-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                <Link href="/login">{"学生として始める"}</Link>
              </Button>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            {"※一部、より専門的な「有料特別講座」もございます。"}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground border-t-4 border-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{"道を極める。今、その一歩を踏み出せ。"}</h2>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link href="/login">
              {"3日間無料体験に申し込む"}
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
          <p className="text-sm text-primary-foreground/70 mt-4">{"クレジットカード登録不要"}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t-4 border-accent py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground text-lg">{"NIPPON介護道場"}</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {"プライバシーポリシー"}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {"利用規約"}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {"特定商取引法"}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {"お問い合わせ"}
              </Link>
            </nav>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
            {"© 2025 NIPPON介護道場. All rights reserved."}
          </div>
        </div>
      </footer>
    </div>
  )
}
