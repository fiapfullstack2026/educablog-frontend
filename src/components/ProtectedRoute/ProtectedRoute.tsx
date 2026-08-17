import { Navigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/hooks/useAuth'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requireTeacher?: boolean
}

export const ProtectedRoute = ({ children, requireTeacher = false }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requireTeacher && !user?.isTeacher) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
