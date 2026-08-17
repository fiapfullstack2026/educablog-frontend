// TODO: conectar ao authService.signIn e salvar token via AuthContext

import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

export const LoginForm = () => (
  <form className="flex flex-col gap-5">
    <Input id="username" label="Usuário" placeholder="Digite seu usuário" type="text" />
    <Input id="password" label="Senha" placeholder="Digite sua senha" type="password" />
    <Button type="submit" className="w-full">
      Entrar
    </Button>
  </form>
)
