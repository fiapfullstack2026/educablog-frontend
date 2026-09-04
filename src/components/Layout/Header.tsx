import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const roleStyles = {
  professor: "bg-teal-200 text-amber-900",
  aluno: "bg-cyan-200 text-sky-900",
};

function getInitials(name: string) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();
  const role = user?.isTeacher ? "professor" : "aluno";
  const avatarClass = roleStyles[role];
  const displayRole = role ? role[0].toUpperCase() + role.slice(1) : null;

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

        <div className="flex items-center gap-2.5 border-l border-white/20 pl-3 sm:gap-3 sm:pl-4">
          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium ${avatarClass}`}
          >
            {getInitials(user?.username)}
          </span>

          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-medium text-white">
              {user?.username}
            </span>
            {displayRole && (
              <span className="block text-xs text-emerald-200">
                {displayRole}
              </span>
            )}
          </span>
        </div>

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
