import { useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";

const roleStyles = {
  professor: "bg-teal-200 text-sky-900",
  aluno: "bg-cyan-200 text-sky-900",
};

function getInitials(name?: string) {
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
  const [menuOpen, setMenuOpen] = useState(false);
  const role = user?.isTeacher ? "professor" : "aluno";
  const avatarClass = roleStyles[role];
  const displayRole = role ? role[0].toUpperCase() + role.slice(1) : null;

  const closeMenu = () => setMenuOpen(false);

  const linkClass = "text-white/75 hover:text-white transition-colors";

  const navLinks = (
    <>
      <Link to="/home" className={linkClass} onClick={closeMenu}>
        Home
      </Link>

      {isAuthenticated && user?.isTeacher && (
        <>
          <Link to="/admin" className={linkClass} onClick={closeMenu}>
            Posts
          </Link>
          <Link to="/posts/new" className={linkClass} onClick={closeMenu}>
            Criar post
          </Link>
        </>
      )}
    </>
  );

  const userSummary = (
    <div className="flex items-center gap-2.5 sm:gap-3">
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
  );

  const authAction = isAuthenticated ? (
    <Button
      variant="secondary"
      onClick={() => {
        signOut();
        closeMenu();
        navigate("/login");
      }}
    >
      Sair
    </Button>
  ) : (
    <Link to="/login" className={linkClass} onClick={closeMenu}>
      Entrar
    </Link>
  );

  return (
    <header className="bg-green-primary text-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          to="/home"
          className="text-xl font-medium tracking-tight"
          onClick={closeMenu}
        >
          <span className="text-cream-light">Educa</span>
          <span className="text-green-light">Blog</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks}

          <div className="flex items-center gap-3 border-l border-white/20 pl-4">
            {isAuthenticated && userSummary}
            {authAction}
          </div>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded text-white/80 transition-colors hover:text-white md:hidden"
        >
          {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-white/15 px-4 pb-4 pt-3 text-sm md:hidden">
          <nav className="flex flex-col gap-4">{navLinks}</nav>

          {isAuthenticated && (
            <div className="border-t border-white/15 pt-3">{userSummary}</div>
          )}

          <div className="border-t border-white/15 pt-3">{authAction}</div>
        </div>
      )}
    </header>
  );
};
