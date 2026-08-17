import { api } from '@/lib/axios'
import type { SignInRequest, SignInResponse, RegisterRequest } from '../types/auth.types'

export const authService = {
  signIn: async (credentials: SignInRequest): Promise<SignInResponse> => {
    const { data } = await api.post<SignInResponse>('/user/signin', credentials)
    return data
  },

  register: async (payload: RegisterRequest): Promise<void> => {
    await api.post('/user/register', payload)
  },
}
