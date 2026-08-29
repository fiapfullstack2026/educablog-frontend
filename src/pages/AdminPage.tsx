// TODO: conectar ao useAdmin e implementar exclusão com confirmação

import { Link } from 'react-router-dom'
import { PostTable } from '@/features/admin/components/PostTable'

export const AdminPage = () => (
  <div>
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Administração</h1>
      <Link
        to="/posts/new"
        className="inline-flex items-center gap-2 self-start bg-accent text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        + Novo post
      </Link>
    </div>
    <PostTable posts={[]} onDelete={(id) => console.log('excluir:', id)} />
  </div>
)
