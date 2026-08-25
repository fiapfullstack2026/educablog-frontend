import { api } from '@/lib/axios'
import type { ApiListResponse, ApiResponse } from '@/types/api.types'
import type { Post, CreatePostRequest, UpdatePostRequest } from '../types/post.types'

export const postsService = {
  list: async (): Promise<Post[]> => {
    const { data } = await api.get<ApiListResponse<Post>>('/posts')
    return data.data ?? []
  },

  search: async (query: string): Promise<Post[]> => {
    const { data } = await api.get<ApiListResponse<Post>>('/posts/search', {
      params: { q: query },
    })
    return data.data ?? []
  },

  getById: async (id: string): Promise<Post> => {
    const { data } = await api.get<ApiResponse<Post>>(`/posts/${id}`)
    return data.data
  },

  create: async (payload: CreatePostRequest): Promise<Post> => {
    const { data } = await api.post<ApiResponse<Post>>('/posts', payload)
    return data.data
  },

  update: async (id: string, payload: UpdatePostRequest): Promise<Post> => {
    const { data } = await api.put<ApiResponse<Post>>(`/posts/${id}`, payload)
    return data.data
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/posts/${id}`)
  },
}
