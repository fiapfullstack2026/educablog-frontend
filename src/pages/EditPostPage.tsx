import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PostForm } from "@/features/posts/components/PostForm";
import { postsService } from "@/features/posts/services/posts.service";
import type { CreatePostRequest } from "@/features/posts/types/post.types";

export const EditPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] =
    useState<Partial<CreatePostRequest>>();

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return;

      try {
        const data = await postsService.getPostById(id);

        const post = data.data ?? data;

        setInitialValues({
          title: post.title,
          discipline: post.discipline,
          teacher: post.teacher,
          content: post.content,
        });
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const handleSubmit = async (values: CreatePostRequest) => {
    if (!id) return;

    try {
      setIsSaving(true);

      await postsService.update(id, values);

      navigate("/home");
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <p>Carregando post...</p>;
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Editar</h1>

      <PostForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isLoading={isSaving}
      />
    </div>
  );
};
