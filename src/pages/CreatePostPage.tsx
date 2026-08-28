import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostForm } from "@/features/posts/components/PostForm";
import { postsService } from "@/features/posts/services/posts.service";

export const CreatePostPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: {
    title: string;
    discipline: string;
    content: string;
    teacher: string;
  }) => {
    try {
      setIsLoading(true);

      await postsService.create(values);

      navigate("/home");
    } catch (error) {
      console.error("Erro ao criar post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Novo post</h1>

      <PostForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};
