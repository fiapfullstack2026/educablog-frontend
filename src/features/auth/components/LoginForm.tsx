import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

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
      console.log("1 - Enviando login...");

      const response = await authService.signIn({
        username,
        password,
      });

      console.log("2 - Backend respondeu:", response);

      const user = decodeUserFromToken(response.token);

      console.log("3 - Usuário decodificado:", user);

      signIn(response.token, user);

      console.log("4 - SignIn executado");

      navigate("/home");

      console.log("5 - Navegou");
    } catch (err) {
      console.error("ERRO:", err);

      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Usuário ou senha inválidos")
        : "Não foi possível fazer login";

      setError(message);
    } finally {
      console.log("6 - Finalizando loading");
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input
        id="username"
        label="Usuário"
        placeholder="Digite seu usuário"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error || undefined}
      />

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
};
