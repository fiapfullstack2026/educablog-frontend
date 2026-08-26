import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postsService } from "@/features/posts/services/posts.service";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postsService.getPosts();

        const postsList = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : Array.isArray(data.data)
              ? data.data
              : [];

        setPosts(postsList);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();

    return (
      post.title?.toLowerCase().includes(searchText) ||
      post.category?.toLowerCase().includes(searchText) ||
      post.description?.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Seja bem-vindo</h1>

          <p className="mt-1 text-gray-500">
            Confira os últimos conteúdos publicados.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Pesquisar posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 pr-12 text-sm text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">Carregando posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">Nenhum post encontrado.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
                  {post.category}
                </span>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {post.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Por {post.author}
                  </span>

                  <Link
                    to={`/posts/${post._id}`}
                    className="font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
