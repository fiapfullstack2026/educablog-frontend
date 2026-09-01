import { Link } from "react-router-dom";
import type { Post } from "../types/post.types";
import { getDiscipline } from "../constants/disciplines";
import { DisciplineBadge } from "./DisciplineBadge";
import { htmlToPlainText } from "../utils/htmlToPlainText";

interface PostCardProps {
  post: Post;
  /** já visualizado pelo usuário (badge "Visualizado" x "Novo") */
  viewed?: boolean;
  onView?: (id: string) => void;
}

export const PostCard = ({ post, viewed = false, onView }: PostCardProps) => {
  const d = getDiscipline(post.discipline);
  const text = htmlToPlainText(post.content);
  const summary = text
    ? `${text.slice(0, 120)}${text.length > 120 ? "..." : ""}`
    : "Sem descrição disponível.";

  return (
    <Link
      to={`/posts/${post._id}`}
      onClick={() => onView?.(post._id)}
      className="block group"
    >
      <article
        className="relative h-full bg-white rounded-card border-hair p-6 transition-colors duration-200 hover:border-green-mid"
        style={{
          borderColor: d.border,
          borderTopColor: d.text,
          borderTopWidth: 3,
        }}
      >
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
            viewed
              ? "bg-surface-1 text-text-muted"
              : "bg-green-pale text-green-primary"
          }`}
        >
          {viewed ? "Visualizado" : "Novo"}
        </span>

        <DisciplineBadge discipline={post.discipline} />

        <h2 className="mt-4 text-lg font-medium text-text-primary line-clamp-2">
          {post.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-text-secondary line-clamp-3">
          {summary}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-text-muted">
          <span style={{ color: d.text }}>{post.teacher || post.author || "Não informado"}</span>
          <span>
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("pt-BR")
              : ""}
          </span>
        </div>
      </article>
    </Link>
  );
};
