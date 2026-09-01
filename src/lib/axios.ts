import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const requestUrl: string = error.config?.url ?? "";
    const isAuthRequest = /\/user\/(signin|register)/.test(requestUrl);

    // 401 numa rota autenticada = sessão expirada -> desloga e volta pro login.
    // 401 no próprio login/cadastro = credenciais inválidas -> deixa a tela tratar.
    if (error.response?.status === 401 && !isAuthRequest) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
