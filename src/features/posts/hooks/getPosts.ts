import { useEffect, useState } from "react";
import { postsService } from "../services/posts.service";
import type { Post } from "../types/post.types";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await postsService.getPosts();
        if (active) setPosts(result);
      } catch (requestError) {
        if (active) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Não foi possível carregar os posts.",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return { posts, loading, error };
};
