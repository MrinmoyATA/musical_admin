<template>
  <div class="pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between">
    <p class="mb-0 text-sm">
      Showing {{ from }} - {{ to }} of {{ total }} results
    </p>
    <ol class="mt-[10px] sm:mt-0 flex flex-wrap gap-1">
      <!-- Prev Button -->
      <li>
        <button
          :disabled="currentPage <= 1"
          @click="$emit('change', currentPage - 1)"
          class="w-[31px] h-[31px] block text-center rounded-md border transition-all"
          :class="{
            'hover:bg-primary-500 hover:text-white hover:border-primary-500': currentPage > 1,
            'text-gray-300 cursor-not-allowed': currentPage <= 1
          }"
        >
          <i class="material-symbols-outlined">chevron_left</i>
        </button>
      </li>

      <!-- Page Numbers -->
      <li v-for="page in pagesToShow" :key="page">
        <button
          @click="$emit('change', page)"
          class="w-[31px] h-[31px] block text-center rounded-md border"
          :class="{
            'bg-primary-500 text-white border-primary-500': page === currentPage,
            'hover:bg-primary-500 hover:text-white hover:border-primary-500': page !== currentPage
          }"
        >
          {{ page }}
        </button>
      </li>

      <!-- Next Button -->
      <li>
        <button
          :disabled="currentPage >= lastPage"
          @click="$emit('change', currentPage + 1)"
          class="w-[31px] h-[31px] block text-center rounded-md border transition-all"
          :class="{
            'hover:bg-primary-500 hover:text-white hover:border-primary-500': currentPage < lastPage,
            'text-gray-300 cursor-not-allowed': currentPage >= lastPage
          }"
        >
          <i class="material-symbols-outlined">chevron_right</i>
        </button>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "AppPagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const pagesToShow = computed(() => {
      const pages = [];
      for (let i = 1; i <= props.lastPage; i++) {
        pages.push(i);
      }
      return pages;
    });

    return {
      pagesToShow,
    };
  },
});
</script>
