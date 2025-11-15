"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, Calendar, User, ThumbsUp, Share2, Bookmark, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProtectedVideoPlayer } from "./ProtectedVideoPlayer"

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

interface VideoContentProps {
  video: Video
  relatedVideos: RelatedVideo[]
}

export function VideoContent({ video, relatedVideos }: VideoContentProps) {
  return (
    <ProtectedVideoPlayer videoId={video.id} title={video.title}>
      {/* Video Player Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-2xl max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-center justify-center">
              <div className="text-center">
                <div className="size-24 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                  <Play className="size-12 text-accent-foreground ml-2" fill="currentColor" />
                </div>
                <p className="text-white text-lg font-medium">動画を再生</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Info and Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Title and Meta */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-accent text-accent-foreground">{video.category}</Badge>
                <Badge variant="secondary">{video.course}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4 leading-tight">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>{video.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{video.uploadDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="size-4" />
                  <span>{video.views.toLocaleString()}回再生</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{video.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <ThumbsUp className="size-4 mr-2" />
                いいね
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="size-4 mr-2" />
                保存
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="size-4 mr-2" />
                共有
              </Button>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="transcript" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="transcript">
                  <FileText className="size-4 mr-2" />
                  文字起こし
                </TabsTrigger>
                <TabsTrigger value="objectives">学習目標</TabsTrigger>
                <TabsTrigger value="resources">資料</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">文字起こし</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      {video.transcript.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed text-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="objectives" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">学習目標</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {video.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="size-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-foreground leading-relaxed">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">資料</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {video.resources.map((resource, index) => (
                        <li key={index}>
                          <Button variant="link" className="h-auto p-0 text-accent">
                            <FileText className="size-4 mr-2" />
                            {resource}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Instructor Card */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                      {video.instructor.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{video.instructor}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      沖縄県認知症介護指導者。AI時代のケアマネジメントの第一人者として、全国各地で講演・研修を実施。
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/instructors/1">講師の詳細を見る</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">関連動画</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedVideos.map((relatedVideo) => (
                  <Link
                    key={relatedVideo.id}
                    href={`/watch/${relatedVideo.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="relative aspect-video w-32 bg-muted rounded overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <Play className="size-8 text-white" fill="white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-accent transition-colors">
                          {relatedVideo.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{relatedVideo.duration}</span>
                          <span>•</span>
                          <span>{relatedVideo.views.toLocaleString()}回</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ProtectedVideoPlayer>
  )
}
