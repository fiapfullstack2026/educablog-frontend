// TODO: conectar ao useAdmin e implementar ações de editar/excluir

import { Link } from 'react-router-dom'
import type { Post } from '@/features/posts/types/post.types'

interface PostTableProps {
  posts: Post[]
  onDelete: (id: string) => void
}

export const PostTable = ({ posts, onDelete }: PostTableProps) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
        <tr>
          <th className="px-5 py-3 font-medium">Título</th>
          <th className="px-5 py-3 font-medium">Disciplina</th>
          <th className="px-5 py-3 font-medium">Professor(a)</th>
          <th className="px-5 py-3 font-medium">Data</th>
          <th className="px-5 py-3 font-medium text-right">Ações</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 bg-white">
        {posts.map((post) => (
          <tr key={post._id} className="hover:bg-gray-50 transition-colors">
            <td className="px-5 py-4 font-medium text-gray-900 max-w-xs truncate">
              {post.title}
            </td>
            <td className="px-5 py-4 text-gray-500">{post.discipline}</td>
            <td className="px-5 py-4 text-gray-500">{post.teacher}</td>
            <td className="px-5 py-4 text-gray-400">
              {new Date(post.createdAt).toLocaleDateString('pt-BR')}
            </td>
            <td className="px-5 py-4 text-right">
              <div className="flex items-center justify-end gap-2">
                <Link
                  to={`/posts/${post._id}/edit`}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => onDelete(post._id)}
                  className="text-xs font-medium text-red-500 hover:underline"
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
      <p className="text-center text-sm text-gray-400 py-10">
        Nenhum post encontrado.
      </p>
    )}
  </div>
)
