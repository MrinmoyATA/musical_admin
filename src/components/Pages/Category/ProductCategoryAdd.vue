<template>
  <form @submit.prevent="submitForm">
    <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
      <div class="trezo-card-content">
        <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">

          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Name *
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Category name"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] w-full outline-0"
            />
          </div>

          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Parent Category
            </label>
            <select
              v-model="form.parent_id"
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] w-full outline-0"
            >
              <option :value="null">None</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Status
            </label>
            <select
              v-model="form.is_active"
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] w-full outline-0"
            >
              <option :value="true">Active</option>
              <option :value="false">Inactive</option>
            </select>
          </div>

          <div class="sm:col-span-2 mb-[20px]">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Description
            </label>
            <textarea
              v-model="form.description"
              placeholder="Enter category description"
              rows="4"
              class="rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] py-[10px] w-full outline-0"
            ></textarea>
          </div>

          <div class="sm:col-span-2 mb-[20px]">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Category Image
            </label>
            <div class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]">
              <div class="flex items-center justify-center">
                <div class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px]">
                  <i class="ri-upload-2-line"></i>
                </div>
                <p class="leading-[1.5]">
                  <strong class="text-black dark:text-white">Click to upload</strong><br />
                  category image
                </p>
              </div>
              <input
                type="file"
                @change="handleImageUpload"
                accept="image/*"
                class="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="trezo-card mb-[25px]">
      <div class="trezo-card-content">
        <button
          type="button"
          @click="$router.back()"
          class="font-medium inline-block py-[10px] px-[20px] bg-danger-500 text-white rounded hover:bg-danger-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="font-medium inline-block py-[10px] px-[20px] bg-primary-500 text-white rounded hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pl-[29px]">
            <i class="material-symbols-outlined absolute top-1/2 -translate-y-1/2">add</i>
            Add Category
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCategoryStore } from '@/stores/CategoryStore';

export default defineComponent({
  name: 'AddCategoryPage',

  data() {
    return {
      form: {
        name: '',
        parent_id: null as number | null,
        description: '',
        image: null as File | null,
        is_active: true,
      },
      categories: [] as any[],
      isProcessing: false,
    };
  },

  methods: {
    async submitForm() {
      this.isProcessing = true;
      try {
        const categoryStore = useCategoryStore();

        const formData = new FormData();
        formData.append('name', this.form.name);
        if (this.form.parent_id) formData.append('parent_id', String(this.form.parent_id));
        formData.append('description', this.form.description || '');
        formData.append('is_active', this.form.is_active ? '1' : '0');
        if (this.form.image) formData.append('image', this.form.image);

        await categoryStore.createCategory(formData);
        this.$router.push({ name: 'CategoryProduct' });
      } catch (error) {
        console.error('Error creating category:', error);
      } finally {
        this.isProcessing = false;
      }
    },

    handleImageUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.form.image = input.files[0];
      }
    },

    async loadCategories() {
      const categoryStore = useCategoryStore();
      await categoryStore.fetchCategories();
      this.categories = categoryStore.categories.filter((c) => !c.parent_id); 
    },
  },

  mounted() {
    this.loadCategories();
  },
});
</script>
