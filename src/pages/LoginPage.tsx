// TODO: conectar LoginForm ao AuthContext e redirecionar após login

import { LoginForm } from '@/features/auth/components/LoginForm'

export const LoginPage = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Educa<span className="text-accent">Blog</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">Entre com sua conta</p>
      </div>
      <LoginForm />
    </div>
  </div>
)
