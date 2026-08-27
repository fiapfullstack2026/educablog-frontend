import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postsService } from "@/features/posts/services/posts.service";

export const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
          {post.category}
        </span>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">{post.title}</h1>

        <p className="mt-4 text-lg leading-7 text-gray-500">
          {post.description}
        </p>

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
            ← Voltar para posts
          </Link>
        </div>
      </article>
    </main>
  );
};
