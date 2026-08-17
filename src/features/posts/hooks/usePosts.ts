// TODO: implementar hook de listagem e busca de posts
// Usar postsService.list() e postsService.search()
// Gerenciar estados: posts, loading, error

export const usePosts = () => {
  return { posts: [], loading: false, error: null }
}
