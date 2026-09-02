import { useEffect, useMemo, useState } from "react";
import { postsService } from "@/features/posts/services/posts.service";
import { Post } from "@/features/posts/types/post.types";
import { PostCard } from "@/features/posts/components/PostCard";
import { SearchBar } from "@/features/posts/components/SearchBar";
import { DisciplineFilter } from "@/features/posts/components/DisciplineFilter";
import { getDiscipline } from "@/features/posts/constants/disciplines";
import { htmlToPlainText } from "@/features/posts/utils/htmlToPlainText";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [viewedPosts, setViewedPosts] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("viewedPosts") || "[]");
  });

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
      } catch {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    const searchText = search.toLowerCase();

    return posts.filter((post) => {
      const matchesSearch =
        post.title?.toLowerCase().includes(searchText) ||
        post.category?.toLowerCase().includes(searchText) ||
        post.discipline?.toLowerCase().includes(searchText) ||
        post.teacher?.toLowerCase().includes(searchText) ||
        htmlToPlainText(post.content).toLowerCase().includes(searchText);

      const matchesDiscipline =
        !discipline || getDiscipline(post.discipline).label === discipline;

      return matchesSearch && matchesDiscipline;
    });
  }, [posts, search, discipline]);

  const handleViewPost = (postId: string) => {
    const updatedViewedPosts = [...new Set([...viewedPosts, postId])];

    localStorage.setItem("viewedPosts", JSON.stringify(updatedViewedPosts));

    setViewedPosts(updatedViewedPosts);
  };

  return (
    <main className="min-h-screen bg-cream px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-green-primary">
            Seja bem-vindo(a)!
          </h1>

          <p className="mt-1 text-text-secondary">
            Confira os últimos conteúdos publicados.
          </p>
        </div>

        <div className="mb-6">
          <SearchBar onSearch={setSearch} value={search} />
        </div>

        <div className="mb-8">
          <DisciplineFilter selected={discipline} onSelect={setDiscipline} />
        </div>

        {isLoading ? (
          <div className="rounded-card border-hair border-green-light bg-white p-8 text-center">
            <p className="text-text-secondary">Carregando posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="rounded-card border-hair border-green-light bg-white p-8 text-center">
            <p className="text-text-secondary">Nenhum post encontrado.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                viewed={viewedPosts.includes(post._id)}
                onView={handleViewPost}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
