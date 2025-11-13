"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signup } = useAuth()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("パスワードが一致しません")
      return
    }

    if (password.length < 6) {
      setError("パスワードは6文字以上で入力してください")
      return
    }

    setIsLoading(true)

    try {
      await signup(email, password, fullName)
    } catch (err: any) {
      setError(err.message || "アカウント作成に失敗しました。もう一度お試しください。")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="size-14 bg-primary rounded-full flex items-center justify-center border-2 border-accent">
              <span className="text-primary-foreground font-bold text-2xl">介</span>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground tracking-wide">{"NIPPON介護道場"}</div>
              <div className="text-xs text-muted-foreground">{"日本の介護を、誇りある道へ。"}</div>
            </div>
          </Link>
          <h1 className="text-2xl font-bold mb-2">{"新規登録"}</h1>
          <p className="text-muted-foreground">{"3日間無料体験を始めましょう"}</p>
        </div>

        <Card className="p-6 border-2 border-accent/20">
          <form className="space-y-4" onSubmit={handleSignup}>
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="fullName">{"お名前"}</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="山田 太郎"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{"メールアドレス"}</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{"パスワード"}</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground">{"6文字以上で入力してください"}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{"パスワード（確認）"}</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "登録中..." : "3日間無料体験を始める"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {"すでにアカウントをお持ちの方は"}
              <Link href="/login" className="text-accent hover:underline font-medium ml-1">
                {"ログイン"}
              </Link>
            </p>
          </div>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          {"登録することで、"}
          <Link href="#" className="text-accent hover:underline font-medium">
            {"利用規約"}
          </Link>
          {"と"}
          <Link href="#" className="text-accent hover:underline font-medium">
            {"プライバシーポリシー"}
          </Link>
          {"に同意したものとみなされます。"}
        </p>

        <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <h3 className="font-bold text-sm mb-2">{"無料体験期間について"}</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>{"• 3日間、全コンテンツにアクセス可能"}</li>
            <li>{"• クレジットカード登録不要"}</li>
            <li>{"• 期間終了後は自動的に無料プランに移行"}</li>
            <li>{"• いつでも有料プランへアップグレード可能"}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
