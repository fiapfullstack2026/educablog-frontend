import { api } from "@/lib/axios";

export const postsService = {
  async getPosts() {
    const response = await api.get("/posts");
    return response.data;
  },
  async getPostById(id: string) {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },
};
