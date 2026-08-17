import { Link } from 'react-router-dom'
import { useAuth } from '@/features/auth/hooks/useAuth'
import { Button } from '@/components/Button/Button'

export const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth()

  return (
    <header className="bg-primary text-white px-6 h-16 flex items-center justify-between shadow-md">
      <Link to="/" className="text-xl font-bold tracking-tight">
        Educa<span className="text-accent">Blog</span>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
          Posts
        </Link>

        {isAuthenticated && user?.isTeacher && (
          <>
            <Link to="/admin" className="opacity-80 hover:opacity-100 transition-opacity">
              Administração
            </Link>
            <Link to="/posts/new" className="opacity-80 hover:opacity-100 transition-opacity">
              Novo post
            </Link>
          </>
        )}

        {isAuthenticated ? (
          <Button
            variant="secondary"
            onClick={signOut}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Sair
          </Button>
        ) : (
          <Link to="/login" className="opacity-80 hover:opacity-100 transition-opacity">
            Entrar
          </Link>
        )}
      </nav>
    </header>
  )
}
