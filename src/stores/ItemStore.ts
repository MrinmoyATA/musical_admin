import { defineStore } from "pinia";
import axios from "@/plugins/axios";
export interface Category {
  id: number;
  name: string;
}
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
  item: ItemResponse | null;
  pagination: PaginatedItems | null;
  loading: boolean;
  error: string | null;
}


export type ItemFormData = {
  category_id: number;
  name: string;
  description?: string | null;
  price_per_hour: number;
  is_available: boolean;
  image?: File | null;
};
export interface ItemResponse {
  id: number;
  category_id: number;
  name: string;
  description?: string | null;
  price_per_hour: number;
  is_available: boolean;
  image?: string | null;
}

export interface Item extends ItemResponse {
  created_at: string;
  updated_at: string;
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
    async getItemById(id: number): Promise<ItemResponse> {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get<{ success: boolean; data: ItemResponse }>(`/api/v1/admin/item/${id}`);

        if (!res.data?.success || !res.data.data) {
          throw new Error('Invalid response structure');
        }

        this.item = res.data.data;

        return this.item;
      } catch (error: unknown) {
        const errorMessage = error instanceof Error
          ? error.message
          : 'Failed to fetch item';

        this.error = errorMessage;
        console.error('API Error:', {
          status: (error as any)?.response?.status,
          data: (error as any)?.response?.data,
        });
        throw new Error(errorMessage);
      } finally {
        this.loading = false;
      }
    },

    async createItem(
      data: Omit<Item, "id" | "created_at" | "updated_at"> & {
        image?: File | null;
      }
    ) {
      this.loading = true;
      this.error = null;
      const form = new FormData();

      try {
        form.append("name", data.name);
        form.append("category_id", String(data.category_id));
        form.append("description", data.description || "");
        form.append("price_per_hour", String(data.price_per_hour));
        form.append("is_available", data.is_available ? "1" : "0");

        if (
          data.image &&
          typeof data.image === "object" &&
          "name" in data.image
        ) {
          form.append("image", data.image as File);
        }

        const res = await axios.post<Item>("/api/v1/admin/item", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Item creation failed";
        console.error("Item creation failed:", error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateItem(
      id: number,
      data: Partial<Item> & { image?: File | null }
    ) {
      this.loading = true;
      this.error = null;
      const form = new FormData();

      try {
        if (data.name !== undefined) form.append("name", data.name);
        if (data.category_id !== undefined)
          form.append("category_id", String(data.category_id));
        if (data.description !== undefined)
          form.append("description", data.description || "");
        if (data.price_per_hour !== undefined)
          form.append("price_per_hour", String(data.price_per_hour));
        if (data.is_available !== undefined)
          form.append("is_available", data.is_available ? "1" : "0");

        if (
          data.image &&
          typeof data.image === "object" &&
          "name" in data.image
        ) {
          form.append("image", data.image as File);
        }

        const res = await axios.post<Item>(
          `/api/v1/admin/item/${id}?_method=PUT`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        return res.data;
      } catch (error: any) {
        this.error = error.response?.data?.message || "Item update failed";
        console.error("Item update failed:", error.response?.data || error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteItem(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.delete(`/api/v1/admin/item/${id}`);
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
        const res = await axios.post(
          `/api/v1/admin/items/${id}/upload-image`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
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
