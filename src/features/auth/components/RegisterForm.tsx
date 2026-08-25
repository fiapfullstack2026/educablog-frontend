import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { authService } from "../services/auth.service";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não são iguais");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await authService.register({
        username,
        password,
        isTeacher,
      });

      navigate("/login");
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Não foi possível criar o usuário")
        : "Não foi possível criar o usuário";

      setError(message);
    } finally {
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
      />

      <Input
        id="confirmPassword"
        label="Confirmar senha"
        placeholder="Digite a senha novamente"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={error || undefined}
      />

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            checked={!isTeacher}
            onChange={() => setIsTeacher(false)}
            className="h-4 w-4"
          />
          Sou aluno
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            checked={isTeacher}
            onChange={() => setIsTeacher(true)}
            className="h-4 w-4"
          />
          Sou professor
        </label>
      </div>

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Criar acesso
      </Button>
    </form>
  );
};
