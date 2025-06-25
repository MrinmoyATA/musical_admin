import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export interface Item {
  id: number;
  category_id: number;
  name: string;
  description?: string | null;
  price_per_hour: number;
  is_available: boolean;
  image?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaginatedItems {
  data: Item[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  from: number | null;
  to: number | null;
}

interface ItemState {
  items: Item[];
  item: Item | null;
  pagination: PaginatedItems | null;
  loading: boolean;
  error: string | null;
}

export const useItemStore = defineStore("items", {
  state: (): ItemState => ({
    items: [],
    item: null,
    pagination: null,
    loading: false,
    error: null,
  }),

  actions: {
    async getItems(query: Record<string, any> = {}) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get<PaginatedItems>("/api/v1/admin/items", {
          params: query,
        });

        // Defensive check for data array
        this.items = Array.isArray(res.data.data) ? res.data.data : [];
        this.pagination = res.data;
        return this.items;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch items";
        console.error("Failed to fetch items:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async getItemById(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get<Item>(`/api/v1/admin/items/${id}`);
        this.item = res.data;
        return this.item;
      } catch (error: any) {
        this.error = error.message || `Failed to fetch item ${id}`;
        console.error(`Failed to fetch item ${id}:`, error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createItem(data: Omit<Item, "id" | "created_at" | "updated_at">) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.post<Item>("/api/v1/admin/items", data);
        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Item creation failed";
        console.error("Item creation failed:", error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateItem(id: number, data: Partial<Item>) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.put<Item>(`/api/v1/admin/items/${id}`, data);
        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Item update failed";
        console.error(`Item update failed:`, error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteItem(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.delete(`/api/v1/admin/items/${id}`);
        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Item deletion failed";
        console.error(`Item deletion failed:`, error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async uploadImage(id: number, imageFile: File) {
      this.loading = true;
      this.error = null;
      const form = new FormData();
      form.append("image", imageFile);

      try {
        const res = await axios.post(`/api/v1/admin/items/${id}/upload-image`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Image upload failed";
        console.error("Image upload failed:", error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
