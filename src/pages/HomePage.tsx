import { useState } from "react";
import { SearchBar } from "@/features/posts/components/SearchBar";
import { PostCard } from "@/features/posts/components/PostCard";
import { getPosts } from "@/features/posts/hooks/getPosts";
import { searchPosts } from "@/features/posts/hooks/searchPosts";

export const HomePage = () => {
  const [query, setQuery] = useState("");
  const allPosts = getPosts();
  const searchResults = searchPosts(query);
  const { posts, loading, error } = query.trim() ? searchResults : allPosts;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Posts educacionais</h1>
        <SearchBar onSearch={setQuery} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-gray-500">Carregando posts...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading &&
          !error &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {!loading && !error && posts.length === 0 && (
          <p className="text-gray-500">Nenhum post encontrado.</p>
        )}
      </div>
    </div>
  );
};
