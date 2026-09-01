import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-green-primary text-white px-6 h-16 flex items-center justify-between">
      <Link to="/home" className="text-xl font-medium tracking-tight">
        <span className="text-cream-light">Educa</span>
        <span className="text-green-light">Blog</span>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link
          to="/home"
          className="text-white/75 hover:text-white transition-colors"
        >
          Home
        </Link>

        {isAuthenticated && user?.isTeacher && (
          <>
            <Link
              to="/admin"
              className="text-white/75 hover:text-white transition-colors"
            >
              Posts
            </Link>
            <Link
              to="/posts/new"
              className="text-white/75 hover:text-white transition-colors"
            >
              Criar post
            </Link>
          </>
        )}

        {isAuthenticated ? (
          <Button
            variant="secondary"
            onClick={() => {
              signOut();
              navigate("/login");
            }}
          >
            Sair
          </Button>
        ) : (
          <Link
            to="/login"
            className="text-white/75 hover:text-white transition-colors"
          >
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
};
