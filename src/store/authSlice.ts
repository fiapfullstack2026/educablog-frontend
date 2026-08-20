import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/features/auth/types/auth.types'

interface AuthState {
  user: User | null
  token: string | null
}

const getInitialUser = (): User | null => {
  const stored = localStorage.getItem('user')
  return stored ? JSON.parse(stored) : null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: getInitialUser(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ token: string; user: User }>) => {
      const { token, user } = action.payload
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      state.token = token
      state.user = user
    },
    signOut: (state) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      state.token = null
      state.user = null
    },
  },
})

export const authReducer = authSlice.reducer
export const { signIn, signOut } = authSlice.actions
