import { defineStore } from "pinia";
import axios from "@/plugins/axios";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null,
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.token,
  },
  actions: {
    async login(payload: { email: string; password: string }) {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.post<{ token: string; user: User }>(
        "/api/v1/admin/login",
        payload
      );
      this.token = response.data.token;
      this.user = response.data.user;
      localStorage.setItem("token", this.token);
      localStorage.setItem("user", JSON.stringify(this.user));
      axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common.Authorization;
    },
  },
});
