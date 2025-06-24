import { defineStore } from "pinia";
import axios from "@/plugins/axios";
interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: "user" | "admin";
  is_active: boolean;
  profile_image?: string | null;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface PaginatedUsers {
  data: User[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  from: number | null;
  to: number | null;
}

export const useUserStore = defineStore("users", {
  state: () => ({
    users: [] as User[],
    user: null as User | null,
    pagination: {} as PaginatedUsers | null,
  }),

  actions: {
    async getUsers(query: Record<string, any> = {}) {
      try {
        const res = await axios.get<PaginatedUsers>("/api/v1/admin/users", {
          params: query,
        });
        this.users = res.data.data;
        this.pagination = res.data;
        return res.data;
      } catch (error: any) {
        console.error("Failed to fetch users:", error);
        throw error;
      }
    },

    async getUserById(id: number) {
      try {
        const res = await axios.get<User>(`/api/v1/admin/users/${id}`);
        this.user = res.data;
        return res.data;
      } catch (error: any) {
        console.error(`Failed to fetch user ${id}:`, error);
        throw error;
      }
    },

    async createUser(data: Partial<User> & { password: string }) {
      try {
        const res = await axios.post<User>("/api/v1/admin/users", data);
        return res.data;
      } catch (error: any) {
        console.error("User creation failed:", error.response?.data || error);
        throw error;
      }
    },

    async updateUser(id: number, data: Partial<User>) {
      try {
        const res = await axios.put<User>(`/api/v1/admin/users/${id}`, data);
        return res.data;
      } catch (error: any) {
        console.error(`User update failed:`, error.response?.data || error);
        throw error;
      }
    },

    async deleteUser(id: number) {
      try {
        const res = await axios.delete(`/api/v1/admin/users/${id}`);
        return res.data;
      } catch (error: any) {
        console.error(`User deletion failed:`, error.response?.data || error);
        throw error;
      }
    },

    async uploadImage(id: number, imageFile: File) {
      const form = new FormData();
      form.append("image", imageFile);

      try {
        const res = await axios.post(
          `/api/v1/admin/users/${id}/upload-image`,
          form
        );
        return res.data;
      } catch (error: any) {
        console.error("Image upload failed:", error.response?.data || error);
        throw error;
      }
    },
  },
});
