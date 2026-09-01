import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-pale flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-card border-hair border-green-light p-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-card border border-green-light bg-green-pale">
              <span className="text-xl font-medium text-green-primary">E</span>
            </div>

            <h1 className="text-2xl font-medium">
              <span className="text-green-primary">Educa</span>
              <span className="text-blue-primary">Blog</span>
            </h1>

            <p className="mt-1 text-sm text-text-secondary">
              Entre na sua conta para continuar
            </p>
          </div>

          <LoginForm />

          <div className="mt-5 text-center">
            <p className="text-sm text-text-secondary">
              Ainda não possui uma conta?
            </p>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="mt-1 font-medium text-blue-primary hover:opacity-80 transition"
            >
              Cadastrar usuário
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-text-muted">
          EducaBlog • Plataforma educacional
        </p>
      </div>
    </div>
  );
};
