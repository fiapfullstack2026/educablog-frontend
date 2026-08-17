import { Link } from 'react-router-dom'
import type { Post } from '../types/post.types'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => (
  <Link to={`/posts/${post._id}`} className="block group">
    <article className="
      bg-white rounded-xl border border-gray-200 p-6
      hover:border-accent hover:shadow-md
      transition-all duration-200
    ">
      <div className="flex items-center gap-2 mb-3">
        <span className="
          text-xs font-medium px-2.5 py-1 rounded-full
          bg-accent/10 text-accent
        ">
          {post.discipline}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors line-clamp-2">
        {post.title}
      </h2>

      <p className="text-sm text-gray-500 line-clamp-3 mb-4">
        {post.content}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className="font-medium text-gray-600">{post.teacher}</span>
        <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
      </div>
    </article>
  </Link>
)
