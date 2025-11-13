export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'student' | 'instructor' | 'admin'
export type SubscriptionStatus = 'active' | 'inactive' | 'trial' | 'canceled'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: UserRole
          subscription_status: SubscriptionStatus | null
          subscription_plan: string | null
          stripe_customer_id: string | null
          trial_ends_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: UserRole
          subscription_status?: SubscriptionStatus | null
          subscription_plan?: string | null
          stripe_customer_id?: string | null
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: UserRole
          subscription_status?: SubscriptionStatus | null
          subscription_plan?: string | null
          stripe_customer_id?: string | null
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      instructors: {
        Row: {
          id: string
          profile_id: string | null
          bio: string | null
          title: string | null
          organization: string | null
          specialties: string[] | null
          social_links: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id?: string | null
          bio?: string | null
          title?: string | null
          organization?: string | null
          specialties?: string[] | null
          social_links?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string | null
          bio?: string | null
          title?: string | null
          organization?: string | null
          specialties?: string[] | null
          social_links?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          instructor_id: string | null
          thumbnail_url: string | null
          category: string | null
          difficulty_level: string | null
          total_duration_minutes: number
          total_lessons: number
          is_published: boolean
          is_featured: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          instructor_id?: string | null
          thumbnail_url?: string | null
          category?: string | null
          difficulty_level?: string | null
          total_duration_minutes?: number
          total_lessons?: number
          is_published?: boolean
          is_featured?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          instructor_id?: string | null
          thumbnail_url?: string | null
          category?: string | null
          difficulty_level?: string | null
          total_duration_minutes?: number
          total_lessons?: number
          is_published?: boolean
          is_featured?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          slug: string
          description: string | null
          cloudflare_video_id: string | null
          thumbnail_url: string | null
          duration_seconds: number | null
          order_index: number
          chapter_number: number | null
          chapter_title: string | null
          is_published: boolean
          is_preview: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          slug: string
          description?: string | null
          cloudflare_video_id?: string | null
          thumbnail_url?: string | null
          duration_seconds?: number | null
          order_index?: number
          chapter_number?: number | null
          chapter_title?: string | null
          is_published?: boolean
          is_preview?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          slug?: string
          description?: string | null
          cloudflare_video_id?: string | null
          thumbnail_url?: string | null
          duration_seconds?: number | null
          order_index?: number
          chapter_number?: number | null
          chapter_title?: string | null
          is_published?: boolean
          is_preview?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          watched_duration_seconds: number
          total_duration_seconds: number | null
          is_completed: boolean
          last_watched_at: string
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          watched_duration_seconds?: number
          total_duration_seconds?: number | null
          is_completed?: boolean
          last_watched_at?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          watched_duration_seconds?: number
          total_duration_seconds?: number | null
          is_completed?: boolean
          last_watched_at?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          excerpt: string | null
          author_id: string | null
          thumbnail_url: string | null
          category: string | null
          tags: string[] | null
          view_count: number
          is_published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          excerpt?: string | null
          author_id?: string | null
          thumbnail_url?: string | null
          category?: string | null
          tags?: string[] | null
          view_count?: number
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          excerpt?: string | null
          author_id?: string | null
          thumbnail_url?: string | null
          category?: string | null
          tags?: string[] | null
          view_count?: number
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      bookmarks: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          created_at?: string
        }
      }
    }
  }
}
