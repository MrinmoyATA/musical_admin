// src/stores/StateStore.ts
import { defineStore } from 'pinia';

export const useStateStore = defineStore('stateStore', {
  state: () => ({
    activeButton: false,
  }),

  actions: {
    activeBtn() {
      this.activeButton = !this.activeButton;
    },
  },
});
