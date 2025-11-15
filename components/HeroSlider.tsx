"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  // Video slide 1
  {
    type: "video",
    badge: "特集動画",
    title: "AI時代のケアマネジメント",
    description: "玉城竜一氏が語る、ケアプランAIの未来と、人間にしかできないケアの本質。",
    courseId: "1",
    image: "/professional-japanese-instructor-teaching-caregivi.jpg",
  },
  // Message slide 1
  {
    type: "message",
    badge: "理念",
    title: "国のため、道のため、人のため",
    description: "日本の介護を支えている。日本人の暮らしを支えている。介護職に誇りが持てる社会へ。",
    quote: "道を極めたいものが、正当に評価され、存在が際立つ時代へ。",
    author: "玉城竜一",
  },
  // Video slide 2
  {
    type: "video",
    badge: "講義シリーズ",
    title: "ケアマネ法定研修の完全オンライン化",
    description: "全国に先駆けて実現した沖縄県のケアマネ法定研修オンライン化の取り組みについて。",
    courseId: "1",
    image: "/professional-japanese-instructor-teaching-caregivi.jpg",
  },
  // Video slide 3
  {
    type: "video",
    badge: "DX推進",
    title: "介護業界のDXを目指して",
    description: "沖縄の介護福祉業界における先進的なデジタルトランスフォーメーションの実践例。",
    courseId: "1",
    image: "/professional-japanese-instructor-teaching-caregivi.jpg",
  },
  // Message slide 2
  {
    type: "message",
    badge: "NIPPON介護道場",
    title: "日本の介護を、誇りある道へ",
    description: "月額1,800円で、すべての道場シリーズが見放題。プロフェッショナルな介護職を目指すあなたへ。",
    cta: true,
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[600px] md:min-h-[700px]">
      <div className="absolute inset-0 bg-[url('/japanese-dojo-interior-dark-atmospheric.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24 relative w-full">
          {slide.type === "video" ? (
            <div className="grid md:grid-cols-2 gap-8 items-center animate-in fade-in duration-700">
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">{slide.badge}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{slide.title}</h1>
                <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="secondary" className="text-base">
                    <Link href={`/course/${slide.courseId}`}>
                      <Play className="mr-2 size-5" />
                      コースを見る
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Link href="/login">
                      3日間無料体験
                      <ArrowRight className="ml-2 size-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-accent">
                <div className="absolute inset-0 bg-[url('/professional-japanese-instructor-teaching-caregivi.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
                  <div className="size-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="size-10 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto text-center animate-in fade-in duration-700">
              <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent text-base px-4 py-2">
                {slide.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                {slide.description}
              </p>
              {slide.quote && (
                <div className="my-12 max-w-3xl mx-auto">
                  <div className="text-5xl mb-4 opacity-30 text-accent">"</div>
                  <blockquote className="text-2xl md:text-3xl font-bold mb-6 text-balance leading-relaxed">
                    {slide.quote}
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-16 bg-accent" />
                    <cite className="text-lg not-italic font-medium">{slide.author}</cite>
                    <div className="h-px w-16 bg-accent" />
                  </div>
                </div>
              )}
              {slide.cta && (
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  <Button asChild size="lg" variant="secondary" className="text-base px-8">
                    <Link href="/login">
                      今すぐ始める
                      <ArrowRight className="ml-2 size-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8"
                  >
                    <Link href="#courses">道場一覧を見る</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </section>
  )
}
