// TODO: buscar post pelo :id com postsService.getById()

export const PostPage = () => (
  <article className="max-w-2xl mx-auto">
    <div className="mb-6">
      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
        Disciplina
      </span>
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-3">Título do post</h1>
    <p className="text-sm text-gray-500 mb-8">
      Por <span className="font-medium">Professor(a)</span> · Data
    </p>
    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
      {/* TODO: renderizar post.content */}
    </div>
  </article>
)
