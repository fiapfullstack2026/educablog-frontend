import { api } from "@/lib/axios";
import { Post } from "../types/post.types";
import { ApiListResponse } from "@/types/api.types";

export const postsService = {
  search: async (query: string): Promise<Post[]> => {
    const { data } = await api.get<ApiListResponse<Post>>("/posts/search", {
      params: { q: query },
    });
    return data.data ?? [];
  },
  async getPosts() {
    const response = await api.get("/posts");
    return response.data;
  },
  async getPostById(id: string) {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },
};
