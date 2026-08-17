// TODO: conectar ao usePosts e exibir lista real
import { SearchBar } from '@/features/posts/components/SearchBar'
import { PostCard } from '@/features/posts/components/PostCard'

export const HomePage = () => (
  <div>
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Posts educacionais</h1>
      <SearchBar onSearch={(q) => console.log('buscar:', q)} />
    </div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* TODO: mapear posts do hook usePosts() */}
    </div>
  </div>
)
