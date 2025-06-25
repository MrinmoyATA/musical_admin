import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export interface Category {
  id: number;
  parent_id: number | null;
  name: string;
  slug?: string;
  description?: string | null;
  image?: string | null;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedCategories {
  data: Category[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  from: number | null;
  to: number | null;
}

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [] as Category[],
    pagination: null as PaginatedCategories | null,
  }),

  actions: {
    async fetchCategories(query: Record<string, any> = {}) {
      try {
        const res = await axios.get<PaginatedCategories>(
          "/api/v1/admin/categories",
          {
            params: query,
          }
        );
        this.categories = res.data.data;
        this.pagination = res.data;
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
      }
    },

    async createCategory(data: Partial<Category> | FormData) {
      try {
        const isFormData = data instanceof FormData;
        const res = await axios.post("/api/v1/admin/categories", data, {
          headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
        });
        return res.data;
      } catch (error) {
        console.error("Failed to create category:", error);
        throw error;
      }
    },

    async updateCategory(id: number, data: Partial<Category> | FormData) {
      try {
        const isFormData = data instanceof FormData;

        if (isFormData) {
          data.append("_method", "PUT");
        }

        const res = await axios.post(`/api/v1/admin/categories/${id}`, data, {
          headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
        });

        return res.data;
      } catch (error) {
        console.error("Failed to update category:", error);
        throw error;
      }
    },

    async deleteCategory(id: number) {
      try {
        const res = await axios.delete(`/api/v1/admin/categories/${id}`);
        return res.data;
      } catch (error) {
        console.error("Failed to delete category:", error);
        throw error;
      }
    },
  },
});
