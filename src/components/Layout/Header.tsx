import { useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/login");
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/home"
        onClick={() => setIsMenuOpen(false)}
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        Posts
      </Link>

      {isAuthenticated && user?.isTeacher && (
        <>
          <Link
            to="/admin"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Administração
          </Link>
          <Link
            to="/posts/new"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Novo post
          </Link>
        </>
      )}

      {isAuthenticated ? (
        <Button
          variant="secondary"
          onClick={handleSignOut}
          className="border-white/30 text-white hover:bg-white/10"
        >
          Sair
        </Button>
      ) : (
        <Link
          to="/login"
          onClick={() => setIsMenuOpen(false)}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Entrar
        </Link>
      )}
    </>
  );

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Educa<span className="text-accent">Blog</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {navLinks}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10 sm:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-4 pb-4 pt-3 text-sm sm:hidden">
          {navLinks}
        </nav>
      )}
    </header>
  );
};
