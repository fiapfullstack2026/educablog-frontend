import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { Feedback } from "@/components/Feedback/Feedback";

import { authService } from "../services/auth.service";
import { useAuth } from "../hooks/useAuth";
import { decodeUserFromToken } from "../utils/decodeToken";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Preencha usuário e senha");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await authService.signIn({ username, password });
      const user = decodeUserFromToken(response.token);

      signIn(response.token, user);
      navigate("/home");
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Usuário ou senha inválidos")
        : "Não foi possível fazer login";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div
        className={`flex flex-col gap-5 transition-opacity ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        <Input
          id="username"
          label="Usuário"
          placeholder="Digite seu usuário"
          type="text"
          value={username}
          disabled={isLoading}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <Feedback variant="error">{error}</Feedback>}

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
};
