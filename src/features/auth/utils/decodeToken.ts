import type { User } from '../types/auth.types'

export const decodeUserFromToken = (token: string): User => {
  const payload = token.split('.')[1]
  const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
  return { username: decoded.username, isTeacher: !!decoded.isTeacher }
}
