import { useState, type FormEvent } from "react";

import type { CreatePostRequest } from "../types/post.types";

import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

interface PostFormProps {
  initialValues?: Partial<CreatePostRequest>;
  onSubmit: (values: CreatePostRequest) => Promise<void>;
  isLoading?: boolean;
}

export const PostForm = ({
  initialValues,
  onSubmit,
  isLoading,
}: PostFormProps) => {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [discipline, setDiscipline] = useState(initialValues?.discipline ?? "");
  const [teacher, setTeacher] = useState(initialValues?.teacher ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit({
      title,
      discipline,
      teacher,
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-2xl flex-col gap-5">
      <Input
        id="title"
        label="Título"
        placeholder="Título do post"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        id="discipline"
        label="Disciplina"
        placeholder="Ex: Matemática, Física..."
        value={discipline}
        onChange={(event) => setDiscipline(event.target.value)}
      />

      <Input
        id="teacher"
        label="Professor(a)"
        placeholder="Nome do professor(a)"
        value={teacher}
        onChange={(event) => setTeacher(event.target.value)}
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="content" className="text-sm font-medium text-gray-700">
          Conteúdo
        </label>

        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={8}
          placeholder="Escreva o conteúdo da aula..."
          className="w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <Button type="submit" isLoading={isLoading} className="self-start">
        Salvar
      </Button>
    </form>
  );
};
