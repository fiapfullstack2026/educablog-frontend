// TODO: hook de listagem, edição e exclusão de posts para a área administrativa
// Usar postsService.list(), postsService.update() e postsService.remove()

export const useAdmin = () => {
  return { posts: [], loading: false, error: null }
}
