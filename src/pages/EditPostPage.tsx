// TODO: carregar post pelo :id com postsService.getById()
// e chamar postsService.update() no submit

import { PostForm } from '@/features/posts/components/PostForm'

export const EditPostPage = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Editar post</h1>
    <PostForm onSubmit={async () => {}} />
  </div>
)
