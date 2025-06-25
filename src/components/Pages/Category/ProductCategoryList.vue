<template>
  <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
    <!-- Header -->
    <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input v-model="searchQuery" type="text" placeholder="Search category here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400" />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <RouterLink to="/category/add" type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStore.activeBtn">
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
              add
            </i>
            Add New Category
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Table -->
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table v-if="filteredCategories.length" class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Sl No</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Image</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Name</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Total Products</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Description</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Status</th>
              <th class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Action</th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="(category, index) in filteredCategories" :key="category.id">
              <td class="px-[20px] py-[15px]">{{ index + 1 }}</td>
              <td class="px-[20px] py-[15px]">
                <img width="50" class="rounded-full" :src="getImageUrl(category?.image || '')" alt="category-image" />
              </td>
              <td class="px-[20px] py-[15px]">{{ category.name }}</td>
              <td class="px-[20px] py-[15px]">
                {{ category.total_products || 0 }}
              </td>
              <td class="px-[20px] py-[15px] text-gray-500 dark:text-gray-400">
                {{ category.description }}
              </td>
              <td class="px-[20px] py-[15px]">
                <span :class="[
                  'px-[8px] py-[3px] inline-block rounded-sm font-medium text-xs',
                  category.is_active
                    ? 'bg-primary-50 text-primary-500 dark:bg-[#15203c]'
                    : 'bg-red-100 text-red-500 dark:bg-[#2c1f1f]'
                ]">
                  {{ category.is_active ? "Active" : "Inactive" }}
                </span>
              </td>
              <td class="px-[20px] py-[15px]">
                <div class="flex items-center gap-[9px]">

                  <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'" @click="$router.push({ name: 'CategoryEdit', params: { id: category.id } })">
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button type="button" class="text-danger-500 leading-none custom-tooltip" v-tooltip="'Delete'">
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center py-4 text-gray-400 dark:text-gray-500">
          No categories found.
        </div>
      </div>

      <AppPagination v-if="pagination" :currentPage="pagination.current_page" :lastPage="pagination.last_page"
        :total="pagination.total" :from="pagination.from ?? 0" :to="pagination.to ?? 0" @change="onPageChange"
        class="px-[20px] md:px-[25px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCategoryStore } from '@/stores/CategoryStore';
import { useStateStore } from '@/stores/StateStore';
import AppPagination from '@/components/Common/Pagination.vue';
import { getImageUrl } from '@/utils/helpers';
import type { PaginatedCategories, Category } from '@/stores/CategoryStore';

export default defineComponent({
  name: 'CategoriesListPage',
  components: { AppPagination },

  data() {
    return {
      isProcessing: false,
      searchQuery: '',

    };
  },

  computed: {
    stateStore() {
      return useStateStore();
    },
    categories() {
      return useCategoryStore().categories;
    },
    pagination(): PaginatedCategories {
      return useCategoryStore().pagination!;
    },
    serialStart(): number {
      return (this.pagination.current_page - 1) * this.pagination.per_page;
    },
    filteredCategories(): Category[] {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) return this.categories;
      return this.categories.filter(category =>
        category.name.toLowerCase().includes(query)
      );
    },
  },

  methods: {
    getImageUrl,
    async fetchCategories(query: Record<string, any> = {}) {
      this.isProcessing = true;
      try {
        await useCategoryStore().fetchCategories(query);
      } finally {
        this.isProcessing = false;
      }
    },

    onQueryChange() {
      const q = { ...this.$route.query };
      if (this.searchQuery) q.q = this.searchQuery;
      this.$router.replace({ name: 'CategoriesListPage', query: q });
    },

    onPageChange(page: number) {
      this.$router.replace({ name: 'CategoriesListPage', query: { ...this.$route.query, page } });
    },

    async deleteCategory(id: number) {
      if (!confirm('Are you sure you want to delete this category?')) return;
      this.isProcessing = true;
      try {
        await useCategoryStore().deleteCategory(id);
        await this.fetchCategories(this.$route.query);
      } finally {
        this.isProcessing = false;
      }
    },
  },

  mounted() {
    this.fetchCategories(this.$route.query);
  },

  watch: {
    '$route.query': {
      handler(newQuery) {
        this.fetchCategories(newQuery);
      },
      immediate: true,
    },
  },
});
</script>
