import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-md border border-sky-100 p-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
              <span className="text-xl font-bold text-sky-600">E</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Educa<span className="text-sky-500">Blog</span>
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Entre na sua conta para continuar
            </p>
          </div>

          <LoginForm />

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-500">Ainda não possui uma conta?</p>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="mt-1 font-semibold text-sky-600 hover:text-sky-500 transition"
            >
              Cadastrar usuário
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          EducaBlog • Plataforma educacional
        </p>
      </div>
    </div>
  );
};
