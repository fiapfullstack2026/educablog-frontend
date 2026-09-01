import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Post } from "@/features/posts/types/post.types";
import { DisciplineBadge } from "@/features/posts/components/DisciplineBadge";

interface PostTableProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PAGE_SIZE = 10;

export const PostTable = ({ posts, onDelete }: PostTableProps) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));

  // Mantém a página dentro dos limites quando a lista encolhe (ex.: após excluir).
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pagePosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return posts.slice(start, start + PAGE_SIZE);
  }, [posts, page]);

  const rangeStart = posts.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE, posts.length);

  return (
    <div>
      <div className="overflow-x-auto rounded-card border-hair border-green-light">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-1 text-[11px] uppercase tracking-wider text-text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Título</th>
              <th className="px-5 py-3 font-medium">Disciplina</th>
              <th className="px-5 py-3 font-medium">Professor(a)</th>
              <th className="px-5 py-3 font-medium">Data</th>
              <th className="px-5 py-3 text-right font-medium">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-light/50 bg-white">
            {pagePosts.map((post) => (
              <tr key={post._id} className="transition-colors hover:bg-cream">
                <td className="max-w-xs truncate px-5 py-4 font-medium text-text-primary">
                  {post.title}
                </td>
                <td className="px-5 py-4">
                  <DisciplineBadge discipline={post.discipline} />
                </td>
                <td className="px-5 py-4 text-text-secondary">{post.teacher}</td>
                <td className="px-5 py-4 text-text-muted">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("pt-BR")
                    : "—"}
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      to={`/posts/${post._id}/edit`}
                      className="text-xs font-medium text-green-primary hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => onDelete(post._id)}
                      className="text-xs font-medium text-danger hover:underline"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {posts.length === 0 && (
          <p className="py-10 text-center text-sm text-text-muted">
            Nenhum post encontrado.
          </p>
        )}
      </div>

      {posts.length > PAGE_SIZE && (
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-text-muted">
            {rangeStart}–{rangeEnd} de {posts.length}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded border border-green-mid px-3 py-1.5 font-medium text-green-primary transition-colors hover:bg-green-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>

            <span className="text-text-secondary">
              Página {page} de {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded border border-green-mid px-3 py-1.5 font-medium text-green-primary transition-colors hover:bg-green-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
