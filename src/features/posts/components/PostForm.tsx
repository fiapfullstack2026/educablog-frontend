// TODO: implementar lógica de submit e validação
// Campos: title, discipline, content, teacher
// Recebe onSubmit como prop (usado em CreatePostPage e EditPostPage)

import type { CreatePostRequest } from '../types/post.types'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

interface PostFormProps {
  initialValues?: Partial<CreatePostRequest>
  onSubmit: (values: CreatePostRequest) => Promise<void>
  isLoading?: boolean
}

export const PostForm = ({ onSubmit, isLoading }: PostFormProps) => (
  <form
    className="flex flex-col gap-5 max-w-2xl"
    onSubmit={(e) => {
      e.preventDefault()
      // TODO: coletar valores dos campos e validar antes de enviar
      void onSubmit
    }}
  >
    <Input id="title" label="Título" placeholder="Título do post" />
    <Input id="discipline" label="Disciplina" placeholder="Ex: Matemática, Física..." />
    <Input id="teacher" label="Professor(a)" placeholder="Nome do professor(a)" />

    <div className="flex flex-col gap-1">
      <label htmlFor="content" className="text-sm font-medium text-gray-700">
        Conteúdo
      </label>
      <textarea
        id="content"
        rows={8}
        placeholder="Escreva o conteúdo da aula..."
        className="
          w-full px-3 py-2.5 rounded-md border border-gray-300
          text-sm bg-white text-gray-900 placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
          transition-shadow duration-150 resize-y
        "
      />
    </div>

    <Button type="submit" isLoading={isLoading} className="self-start">
      Salvar post
    </Button>
  </form>
)
