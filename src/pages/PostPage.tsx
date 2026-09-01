import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { postsService } from "@/features/posts/services/posts.service";
import { Post } from "@/features/posts/types/post.types";
import { DisciplineBadge } from "@/features/posts/components/DisciplineBadge";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/Button/Button";
import { Feedback } from "@/components/Feedback/Feedback";

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return;

      try {
        const response = await postsService.getPostById(id);
        setPost(response.data ?? response);
      } catch {
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
      setDeleteError("");

      await postsService.delete(id);

      navigate("/admin");
    } catch {
      setDeleteError("Não foi possível excluir o post.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-cream px-4 py-8">
        <div className="mx-auto max-w-3xl rounded-card border-hair border-green-light bg-white p-8 text-center">
          <p className="text-text-secondary">Carregando post...</p>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-cream px-4 py-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <Feedback variant="error">{error || "Post não encontrado."}</Feedback>
          <Link
            to="/home"
            className="inline-block font-medium text-blue-primary"
          >
            ← Voltar para posts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-4 py-8 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-card border-hair border-green-light bg-white p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <DisciplineBadge discipline={post.discipline} />

            <h1 className="mt-4 text-3xl font-medium text-text-primary">
              {post.title}
            </h1>
          </div>

          {user?.isTeacher && (
            <div className="flex gap-3">
              <Link to={`/posts/${post._id}/edit`}>
                <Button variant="outline-green">Editar</Button>
              </Link>

              <Button
                variant="danger"
                onClick={handleDelete}
                isLoading={isDeleting}
              >
                Excluir
              </Button>
            </div>
          )}
        </div>

        {deleteError && (
          <div className="mt-4">
            <Feedback variant="error">{deleteError}</Feedback>
          </div>
        )}

        <div className="my-6 border-t border-green-light/60" />

        <div className="text-sm text-text-secondary">
          <p>
            <strong className="font-medium">Disciplina:</strong>{" "}
            {post.discipline || "Não informado"}
          </p>

          <p className="mt-2">
            <strong className="font-medium">Professor:</strong>{" "}
            {post.teacher || post.author || "Não informado"}
          </p>

          <p className="mt-2">
            <strong className="font-medium">Publicado em:</strong>{" "}
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("pt-BR")
              : "Não informado"}
          </p>
        </div>

        <div className="my-6 border-t border-green-light/60" />

        <div className="whitespace-pre-line text-base leading-8 text-text-primary">
          {post.content}
        </div>

        <div className="mt-8">
          <Link
            to="/home"
            className="font-medium text-blue-primary hover:opacity-80"
          >
            ← Voltar
          </Link>
        </div>
      </article>
    </main>
  );
};
