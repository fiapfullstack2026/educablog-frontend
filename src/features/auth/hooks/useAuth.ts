import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'
import { signIn as signInAction, signOut as signOutAction } from '@/store/authSlice'
import type { User } from '@/features/auth/types/auth.types'

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { user, token } = useSelector((state: RootState) => state.auth)

  const signIn = (newToken: string, newUser: User) => {
    dispatch(signInAction({ token: newToken, user: newUser }))
  }

  const signOut = () => {
    dispatch(signOutAction())
  }

  return { user, token, isAuthenticated: !!token, signIn, signOut }
}
