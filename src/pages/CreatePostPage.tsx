// TODO: chamar postsService.create() e redirecionar para /admin após sucesso

import { PostForm } from '@/features/posts/components/PostForm'

export const CreatePostPage = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Novo post</h1>
    <PostForm onSubmit={async () => {}} />
  </div>
)
