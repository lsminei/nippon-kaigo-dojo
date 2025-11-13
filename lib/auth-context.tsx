"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { UserRole, SubscriptionStatus } from "@/lib/types/database"

interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: UserRole
  subscription_status: SubscriptionStatus | null
  subscription_plan: string | null
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  mounted: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  signup: (email: string, password: string, fullName: string) => Promise<void>
  isInstructor: () => boolean
  isAdmin: () => boolean
  hasActiveSubscription: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data for development
const MOCK_USERS = {
  'student@example.com': {
    id: '1',
    email: 'student@example.com',
    full_name: '田中 太郎',
    avatar_url: null,
    role: 'student' as UserRole,
    subscription_status: 'trial' as SubscriptionStatus,
    subscription_plan: 'professional'
  },
  'instructor@example.com': {
    id: '2',
    email: 'instructor@example.com',
    full_name: '玉城 竜一',
    avatar_url: null,
    role: 'instructor' as UserRole,
    subscription_status: 'active' as SubscriptionStatus,
    subscription_plan: 'professional'
  },
  'admin@example.com': {
    id: '3',
    email: 'admin@example.com',
    full_name: '管理者',
    avatar_url: null,
    role: 'admin' as UserRole,
    subscription_status: 'active' as SubscriptionStatus,
    subscription_plan: 'professional'
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true)

    // Check if user is logged in from localStorage (mock mode)
    const storedUser = localStorage.getItem("mockUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Error parsing stored user:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const signup = async (email: string, password: string, fullName: string) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create mock user
      const mockUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        email,
        full_name: fullName,
        avatar_url: null,
        role: 'student',
        subscription_status: 'trial',
        subscription_plan: 'professional'
      }

      setUser(mockUser)
      localStorage.setItem("mockUser", JSON.stringify(mockUser))

      router.push("/dashboard")
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check if user exists in mock data
      const mockUser = MOCK_USERS[email as keyof typeof MOCK_USERS]

      if (!mockUser) {
        // If not in predefined users, create a new student user
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          email,
          full_name: email.split('@')[0],
          avatar_url: null,
          role: 'student',
          subscription_status: 'trial',
          subscription_plan: 'professional'
        }

        setUser(newUser)
        localStorage.setItem("mockUser", JSON.stringify(newUser))

        router.push("/dashboard")
        return
      }

      setUser(mockUser)
      localStorage.setItem("mockUser", JSON.stringify(mockUser))

      // Redirect based on role
      if (mockUser.role === 'instructor') {
        router.push("/instructor/dashboard")
      } else if (mockUser.role === 'admin') {
        router.push("/admin/dashboard")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      setUser(null)
      localStorage.removeItem("mockUser")
      router.push("/")
    } catch (error) {
      console.error("Logout failed:", error)
      throw error
    }
  }

  const isInstructor = () => {
    return user?.role === "instructor"
  }

  const isAdmin = () => {
    return user?.role === "admin"
  }

  const hasActiveSubscription = () => {
    return user?.subscription_status === 'active' || user?.subscription_status === 'trial'
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      mounted,
      login,
      logout,
      signup,
      isInstructor,
      isAdmin,
      hasActiveSubscription
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
