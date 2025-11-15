import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "理念 | NIPPON介護道場",
  description: "答えを探すな、問いを磨け。対話と省察で、支援を「人間理解の実践」へ"
}

export default function PhilosophyPage() {
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
              className="text-sm font-medium text-accent border-b-2 border-accent pb-1"
            >
              {"理念"}
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/login">{"ログイン"}</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground text-base px-4 py-2">理念</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              NIPPON介護道場 理念
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              答えを探すな、問いを磨け。<br />
              対話と省察で、支援を「人間理解の実践」へ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 我々が目指すもの */}
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">我々が目指すもの</h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground">
                <p>
                  NIPPON介護道場は、介護を単なる「作業」や「制度運用」で終わらせないための実践と鍛錬の場です。
                </p>
                <p>
                  我々は、介護に関わるすべての人が、制度やAIに使われる「調整者」ではなく、利用者の<strong className="text-accent">「人生の物語」</strong>に深く寄り添い、その人らしい幸福を支える<strong className="text-accent">「関係性の翻訳者」</strong>となることを目指します。
                </p>
                <p>
                  そのために、道場生は以下の<strong>「三つの心得」</strong>を胸に、日々の実践と省察に臨みます。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 道場の心得 */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">［道場の心得］</h2>

            <div className="space-y-6">
              {/* 心得 一 */}
              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      一
                    </div>
                    <h3 className="text-2xl font-bold pt-2">
                      支援とは「関係性を紡ぎ直す」こと
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3 text-lg leading-relaxed">
                    <p>
                      我々は、目の前の「状態」だけを見ません。その人の「人生の物語」に耳を傾け、なぜ今その支援が必要なのか、その本質を理解することから始めます。
                    </p>
                    <p>
                      制度やルールは、目的ではなく「道具」です。それを使いこなし、利用者さんが再び「自分の人生の主人公」として歩み出すための「関係性」を、粘り強く紡ぎ直します。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 心得 二 */}
              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      二
                    </div>
                    <h3 className="text-2xl font-bold pt-2">
                      専門性とは「板挟みを引き受ける力」である
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3 text-lg leading-relaxed">
                    <p>
                      介護の現場に、絶対の「正解」はありません。
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>「ルールだから」（義務）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>「その方が効率的だから」（成果）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>「本当にその人のためになるか？」（その人の価値）</span>
                      </li>
                    </ul>
                    <p>
                      これら３つの「正しさ」は、常に対立します。我々は、この「板挟み」から逃げず、あえてその中心に立ち、悩み抜くことを選びます。その葛藤と判断のプロセスこそが、我々の専門性の中核です。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 心得 三 */}
              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      三
                    </div>
                    <h3 className="text-2xl font-bold pt-2">
                      成長とは「自分の思考を言葉にする」こと
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3 text-lg leading-relaxed">
                    <p>
                      我々は、「なんとなく」の実践を許しません。<strong className="text-accent">「なぜ、自分はそう判断したのか？」</strong>を常に問い、仲間やAIとの対話を通じて、自分の考えを<strong className="text-accent">「言葉」</strong>にします。
                    </p>
                    <p>
                      特にAIや技術は、答えを教えてくれる「代行者」ではなく、自分の思考を映し出す<strong className="text-accent">「鏡」</strong>として使います。自分の思考の癖を知り、問いを深めることで、我々は成長し続けます。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 結論 */}
          <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">道場が目指す実践者像</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-center text-xl">
                  NIPPON介護道場は、
                </p>

                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-muted-foreground">単に「計画（プラン）を作る人」から、</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">自ら「深く思考し、対話を生成する人」へ。</span>
                  </div>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto pt-4">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-muted-foreground">単に「サービスを調整する人」から、</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">「人間理解を実践する人」へ。</span>
                  </div>
                </div>

                <p className="text-center text-xl pt-6">
                  その変革を志す、すべての実践者のための「学び舎」です。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <Card className="border-2 border-accent bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">道場生として、共に歩みませんか？</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  NIPPON介護道場で、あなたの実践を深め、仲間と共に成長しましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/signup">
                      3日間無料体験を始める
                      <ArrowRight className="ml-2 size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/#courses">
                      道場一覧を見る
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
