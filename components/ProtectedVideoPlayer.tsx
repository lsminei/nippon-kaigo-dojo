"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ProtectedVideoPlayerProps {
  videoId: string
  title: string
  children: React.ReactNode
}

// Helper function to check if a video is free (first lesson of any course)
function isFreeVideo(videoId: string): boolean {
  // Free videos are the first lesson of each course (e.g., "1_1", "2_1", "3_1")
  const parts = videoId.split('_')
  if (parts.length !== 2) return false
  return parts[1] === '1'
}

export function ProtectedVideoPlayer({ videoId, title, children }: ProtectedVideoPlayerProps) {
  const { user, isLoading, mounted, hasActiveSubscription } = useAuth()
  const [shouldShowContent, setShouldShowContent] = useState(false)
  const isFree = isFreeVideo(videoId)

  useEffect(() => {
    if (mounted && !isLoading) {
      // Show content if video is free OR user has active subscription
      setShouldShowContent(isFree || (!!user && hasActiveSubscription()))
    }
  }, [mounted, isLoading, user, hasActiveSubscription, isFree])

  // Show loading state
  if (!mounted || isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-muted-foreground">読み込み中...</div>
      </div>
    )
  }

  // Show login/signup prompt if not authenticated or no subscription (and video is not free)
  if (!isFree && (!user || !hasActiveSubscription())) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto border-2">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Lock className="size-10 text-accent" />
            </div>
            <CardTitle className="text-2xl mb-2">このコンテンツを視聴するにはログインが必要です</CardTitle>
            <p className="text-muted-foreground">
              「{title}」を含むすべての動画コンテンツにアクセスするには、無料体験または会員登録が必要です。
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pb-8">
            <div className="bg-muted/30 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">会員特典</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>すべての動画コンテンツが見放題</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>玉城竜一氏をはじめとする専門家の講義</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>学習記録の保存と進捗管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>修了証の発行</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>月額1,800円で全コンテンツアクセス</span>
                </li>
              </ul>
            </div>

            <div className="grid gap-3 pt-4">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signup">
                  3日間無料体験を始める
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/login">
                  既にアカウントをお持ちの方はログイン
                </Link>
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground pt-2">
              無料体験期間中はいつでもキャンセル可能です
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show video content if authenticated
  return <>{children}</>
}
