"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
    } catch (err) {
      setError("ログインに失敗しました。メールアドレスとパスワードを確認してください。")
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
            <div className="w-8 h-8 rounded-full bg-red-600 flex-shrink-0" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground tracking-wide">{"NIPPON介護道場"}</div>
              <div className="text-xs text-muted-foreground">{"日本の介護を、誇りある道へ。"}</div>
            </div>
          </Link>
          <h1 className="text-2xl font-bold mb-2">{"道場へようこそ"}</h1>
          <p className="text-muted-foreground">{"アカウントにログインしてください"}</p>
        </div>

        <Card className="p-6 border-2 border-accent/20">
          <form className="space-y-4" onSubmit={handleLogin}>
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
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
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="#" className="text-sm text-accent hover:underline font-medium">
              {"パスワードをお忘れですか？"}
            </Link>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">{"または"}</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">{"まだアカウントをお持ちでない方"}</p>
            <Button
              type="button"
              onClick={() => router.push("/signup")}
              variant="outline"
              className="w-full bg-transparent border-2 border-accent/30 hover:border-accent hover:bg-accent/5"
              size="lg"
            >
              {"新規登録（3日間無料体験）"}
            </Button>
          </div>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          {"ログインすることで、"}
          <Link href="#" className="text-accent hover:underline font-medium">
            {"利用規約"}
          </Link>
          {"と"}
          <Link href="#" className="text-accent hover:underline font-medium">
            {"プライバシーポリシー"}
          </Link>
          {"に同意したものとみなされます。"}
        </p>
      </div>
    </div>
  )
}
