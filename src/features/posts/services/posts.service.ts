import { api } from "@/lib/axios";
import { CreatePostRequest, Post } from "../types/post.types";
import { ApiResponse } from "@/types/api.types";

export const postsService = {
  async getPosts() {
    const response = await api.get("/posts");
    return response.data;
  },
  async getPostById(id: string) {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  create: async (payload: CreatePostRequest): Promise<Post> => {
    const { data } = await api.post<ApiResponse<Post>>("/posts", payload);
    return data.data;
  },

  update: async (
    id: string,
    payload: Partial<CreatePostRequest>,
  ): Promise<Post> => {
    const { data } = await api.put<ApiResponse<Post>>(`/posts/${id}`, payload);
    return data.data;
  },
  delete: async (id: string): Promise<void> => {
    await api.delete(`/posts/${id}`);
  },
};
