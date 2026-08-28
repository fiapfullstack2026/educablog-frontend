import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { postsService } from "@/features/posts/services/posts.service";
import { Post } from "@/features/posts/types/post.types";

import { useAuth } from "@/features/auth/hooks/useAuth";

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return;

      try {
        const response = await postsService.getPostById(id);

        console.log("Post recebido:", response);

        setPost(response.data ?? response);
      } catch (error) {
        console.error("Erro ao buscar post:", error);
        setError("Não foi possível carregar o post.");
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    const confirmed = window.confirm(
      "Tem certeza que deseja excluir este post?",
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);

      await postsService.delete(id);

      navigate("/admin");
    } catch (error) {
      console.error("Erro ao excluir post:", error);
      alert("Não foi possível excluir o post.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-sky-50 px-4 py-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">Carregando post...</p>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-sky-50 px-4 py-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-red-500">{error || "Post não encontrado."}</p>

          <Link
            to="/home"
            className="mt-4 inline-block font-semibold text-sky-600"
          >
            ← Voltar para posts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-8 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            {post.category && (
              <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
                {post.category}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              {post.title}
            </h1>
          </div>

          {user?.isTeacher && (
            <div className="flex gap-3">
              <Link
                to={`/posts/${post._id}/edit`}
                className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Editar
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50"
              >
                {isDeleting ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          )}
        </div>

        <div className="my-6 border-t border-gray-100" />

        <div className="text-sm text-gray-500">
          <p>
            <strong>Disciplina:</strong> {post.discipline || "Não informado"}
          </p>

          <p className="mt-2">
            <strong>Professor:</strong>{" "}
            {post.teacher || post.author || "Não informado"}
          </p>

          <p className="mt-2">
            <strong>Publicado em:</strong>{" "}
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("pt-BR")
              : "Não informado"}
          </p>
        </div>

        <div className="my-6 border-t border-gray-100" />

        <div className="whitespace-pre-line text-base leading-8 text-gray-700">
          {post.content}
        </div>

        <div className="mt-8">
          <Link
            to="/home"
            className="font-semibold text-sky-600 hover:text-sky-700"
          >
            ← Voltar
          </Link>
        </div>
      </article>
    </main>
  );
};
