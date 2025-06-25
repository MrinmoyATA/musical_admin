<template>
  <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
    <!-- Header -->
    <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search category here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStoreInstance.activeBtn"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
              add
            </i>
            Add New Category
          </span>
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Sl No</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Image</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Name</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Total Products</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Slug</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Description</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Status</th>
              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c]">Action</th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="(category, index) in filteredCategories" :key="category.id">
              <td class="px-[20px] py-[15px]">{{ index + 1 }}</td>
              <td class="px-[20px] py-[15px]">
                <img
                  width="50"
                  class="rounded-full"
                  :src="category.image || defaultImage"
                  alt="category-image"
                />
              </td>
              <td class="px-[20px] py-[15px]">{{ category.name }}</td>
              <td class="px-[20px] py-[15px]">{{ category.total_products || 0 }}</td>
              <td class="px-[20px] py-[15px] text-gray-500 dark:text-gray-400">{{ category.slug }}</td>
              <td class="px-[20px] py-[15px] text-gray-500 dark:text-gray-400">{{ category.description }}</td>
              <td class="px-[20px] py-[15px]">
                <span
                  :class="[
                    'px-[8px] py-[3px] inline-block rounded-sm font-medium text-xs',
                    category.is_active
                      ? 'bg-primary-50 text-primary-500 dark:bg-[#15203c]'
                      : 'bg-red-100 text-red-500 dark:bg-[#2c1f1f]'
                  ]"
                >
                  {{ category.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-[20px] py-[15px]">
                <div class="flex items-center gap-[9px]">
                  <a href="javascript:void(0);" class="text-primary-500 leading-none custom-tooltip" v-tooltip="'View'">
                    <i class="material-symbols-outlined !text-md">visibility</i>
                  </a>
                  <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" v-tooltip="'Edit'">
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button type="button" class="text-danger-500 leading-none custom-tooltip" v-tooltip="'Delete'">
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredCategories.length === 0">
              <td colspan="8" class="text-center py-4 text-gray-400 dark:text-gray-500">No categories found.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination placeholder -->
      <Pagination
        items="5"
        total="36"
        class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  components: {
    Pagination,
  },
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
