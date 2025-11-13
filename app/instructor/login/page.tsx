"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Lock, AlertCircle, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function InstructorLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password, "instructor")
    } catch (err) {
      setError("ログインに失敗しました。メールアドレスとパスワードを確認してください。")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="size-4" />
            <span>トップページへ戻る</span>
          </Link>
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="size-8 text-primary" />
            <h1 className="text-3xl font-bold">講師ログイン</h1>
          </div>
          <p className="text-muted-foreground">
            NIPPON介護道場の講師専用ログインページです
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>講師アカウントでログイン</CardTitle>
            <CardDescription>
              講師として記事や動画コンテンツを投稿・管理できます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">ログイン</TabsTrigger>
                <TabsTrigger value="register">新規登録申請</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="instructor@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">パスワード</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      />
                      <Label htmlFor="remember" className="text-sm cursor-pointer">
                        ログイン状態を保持する
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      パスワードを忘れた方
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "ログイン中..." : "講師としてログイン"}
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  受講者としてログインしますか？{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    受講者ログイン
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      講師として活動を希望される方は、以下の情報と共に申請してください。
                      審査後、承認されたらログイン情報をお送りします。
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-2">
                    <Label htmlFor="reg-name">お名前</Label>
                    <Input id="reg-name" placeholder="山田 太郎" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email">メールアドレス</Label>
                    <Input id="reg-email" type="email" placeholder="yamada@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualification">資格・経歴</Label>
                    <textarea
                      id="qualification"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="保有資格、実務経験年数など"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">専門分野</Label>
                    <Input id="specialty" placeholder="認知症ケア、在宅介護など" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content-plan">投稿予定のコンテンツ</Label>
                    <textarea
                      id="content-plan"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="どのようなコンテンツを投稿予定か教えてください"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    講師登録を申請する
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="text-center text-xs text-muted-foreground">
            講師アカウントに関するお問い合わせは
            <br />
            <a href="mailto:instructor@nippon-kaigo-dojo.jp" className="text-primary hover:underline">
              instructor@nippon-kaigo-dojo.jp
            </a>
            までご連絡ください
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}