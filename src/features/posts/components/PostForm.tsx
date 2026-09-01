import { useState, type FormEvent } from "react";

import type { CreatePostRequest } from "../types/post.types";
import { DISCIPLINE_LIST } from "../constants/disciplines";

import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

interface PostFormProps {
  initialValues?: Partial<CreatePostRequest>;
  onSubmit: (values: CreatePostRequest) => Promise<void>;
  isLoading?: boolean;
}

type FieldErrors = Partial<Record<keyof CreatePostRequest, string>>;

export const PostForm = ({
  initialValues,
  onSubmit,
  isLoading,
}: PostFormProps) => {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [discipline, setDiscipline] = useState(initialValues?.discipline ?? "");
  const [teacher, setTeacher] = useState(initialValues?.teacher ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");

  const [errors, setErrors] = useState<FieldErrors>({});

  const clearError = (field: keyof CreatePostRequest) =>
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};

    if (!title.trim()) next.title = "Informe o título do post.";
    if (!discipline) next.discipline = "Selecione uma disciplina.";
    if (!teacher.trim()) next.teacher = "Informe o(a) professor(a).";
    if (!content.trim()) next.content = "Escreva o conteúdo do post.";

    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    await onSubmit({
      title: title.trim(),
      discipline,
      teacher: teacher.trim(),
      content: content.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex max-w-2xl flex-col gap-5"
    >
      <Input
        id="title"
        label="Título"
        placeholder="Título do post"
        value={title}
        error={errors.title}
        onChange={(event) => {
          setTitle(event.target.value);
          clearError("title");
        }}
      />

      <div className="flex flex-col gap-1">
        <label
          htmlFor="discipline"
          className="text-sm font-medium text-text-secondary"
        >
          Disciplina
        </label>

        <select
          id="discipline"
          value={discipline}
          onChange={(event) => {
            setDiscipline(event.target.value);
            clearError("discipline");
          }}
          className={`w-full rounded border px-3 py-2.5 text-sm text-text-primary focus:border-[1.5px] focus:outline-none ${
            errors.discipline
              ? "border-danger bg-danger-bg focus:border-danger"
              : "border-green-light bg-cream focus:border-green-primary"
          }`}
        >
          <option value="">Selecione uma disciplina</option>
          {DISCIPLINE_LIST.map((d) => (
            <option key={d.label} value={d.label}>
              {d.label}
            </option>
          ))}
        </select>

        {errors.discipline && (
          <span className="text-xs text-danger-text">{errors.discipline}</span>
        )}
      </div>

      <Input
        id="teacher"
        label="Professor(a)"
        placeholder="Nome do professor(a)"
        value={teacher}
        error={errors.teacher}
        onChange={(event) => {
          setTeacher(event.target.value);
          clearError("teacher");
        }}
      />

      <div className="flex flex-col gap-1">
        <label
          htmlFor="content"
          className="text-sm font-medium text-text-secondary"
        >
          Conteúdo
        </label>

        <textarea
          id="content"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
            clearError("content");
          }}
          rows={8}
          placeholder="Escreva o conteúdo da aula..."
          className={`w-full resize-y rounded border px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-[1.5px] focus:outline-none ${
            errors.content
              ? "border-danger bg-danger-bg focus:border-danger"
              : "border-green-light bg-cream focus:border-green-primary"
          }`}
        />

        {errors.content && (
          <span className="text-xs text-danger-text">{errors.content}</span>
        )}
      </div>

      <Button type="submit" isLoading={isLoading} className="self-start">
        Salvar
      </Button>
    </form>
  );
};
