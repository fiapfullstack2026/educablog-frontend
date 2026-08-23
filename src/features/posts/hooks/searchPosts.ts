import { useEffect, useState } from "react";
import { Post } from "../types/post.types";
import { postsService } from "../services/posts.service";

export const searchPosts = (query: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await postsService.search(query);
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
  }, [query]);

  return { posts, loading, error };
};
