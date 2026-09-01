import { useCallback, useEffect, useState } from "react";

import { postsService } from "@/features/posts/services/posts.service";
import type { Post } from "@/features/posts/types/post.types";

/** Normaliza as várias formas de resposta possíveis de `GET /posts`. */
function extractPosts(data: unknown): Post[] {
  if (Array.isArray(data)) return data as Post[];
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    if (Array.isArray(obj.posts)) return obj.posts as Post[];
    if (Array.isArray(obj.data)) return obj.data as Post[];
  }
  return [];
}

export const useAdmin = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await postsService.getPosts();
      setPosts(extractPosts(data));
    } catch {
      setError("Não foi possível carregar os posts.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const remove = useCallback(async (id: string) => {
    await postsService.delete(id);
    setPosts((current) => current.filter((post) => post._id !== id));
  }, []);

  return { posts, loading, error, reload: load, remove };
};
