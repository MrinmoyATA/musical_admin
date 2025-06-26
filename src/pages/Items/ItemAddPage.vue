<template>
  <form @submit.prevent="submit">
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white shadow rounded-md p-6">
            <h2 class="text-xl font-semibold mb-4">Item Information</h2>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium">Item Name</label>
                <input v-model="form.name" type="text"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label class="block text-sm font-medium">Description</label>
                <textarea v-model="form.description" rows="4"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium">Price</label>
                <input v-model.number="form.price_per_hour" type="number" step="0.01"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div class="flex items-center space-x-2">
                <input v-model="form.is_available" type="checkbox" id="available"
                  class="form-checkbox h-5 w-5 text-blue-600" />
                <label for="available" class="text-sm font-medium">Available</label>
              </div>


              <div class="sm:col-span-2">
                <label class="mb-2 block text-sm font-medium text-gray-700">Upload Item Image</label>
                <div
                  class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200">
                  <div class="flex items-center justify-center">
                    <div
                      class="w-[35px] h-[35px] border flex items-center justify-center rounded-md text-primary-500 text-lg mr-3">
                      <i class="ri-upload-2-line"></i>
                    </div>
                    <p class="leading-[1.5]">
                      <strong>Click to upload</strong><br />
                      your image file here
                    </p>
                  </div>
                  <input type="file" class="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
                    @change="handleImageUpload" />
                </div>
                <div v-if="form.image" class="mt-2 text-sm text-gray-600">
                  Selected file: {{ form.image.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white shadow rounded-md p-6 space-y-6">
          <h2 class="text-xl font-semibold mb-4">Category</h2>
          <div class="mb-[20px] sm:mb-0">
            <select v-model.number="form.category_id"
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500">
              <option selected value="">Select</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

        </div>
      </div>
    </div>
    <div class="trezo-card-content mt-6">
      <button type="button" @click="$router.back()"
        class="font-medium inline-block py-[10px] px-[20px] bg-danger-500 text-white rounded hover:bg-danger-400">
        Cancel
      </button>
      <button type="submit" :disabled="!form.category_id"
        class="font-medium inline-block py-[10px] px-[20px] bg-primary-500 text-white rounded hover:bg-primary-400 ml-2">
        <span class="inline-block relative pl-[29px]">
          <i class="material-symbols-outlined absolute top-1/2 -translate-y-1/2">add</i>
          Add Item
        </span>
      </button>
    </div>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useItemStore } from '@/stores/ItemStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CreateProduct',
  setup() {
    const categoryStore = useCategoryStore()
    const itemStore = useItemStore()
    const router = useRouter();
    const { categories } = storeToRefs(categoryStore)

    const form = ref({
      name: '',
      description: '',
      image: null as File | null,
      category_id: '',
      price_per_hour: 0,
      is_available: true,
    })

    const handleImageUpload = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (target.files?.length) {
        form.value.image = target.files[0]
      }
    }

    const submit = async () => {
      const formData = new FormData()

      formData.append('name', form.value.name)
      formData.append('description', form.value.description)
      formData.append('price_per_hour', form.value.price_per_hour.toString())
      if (form.value.image) {
        formData.append('image', form.value.image)
      }
      formData.append('category_id', form.value.category_id.toString())

      formData.append('is_available', form.value.is_available ? '1' : '0')

      try {
        const created = await itemStore.createItem({
          name: form.value.name,
          description: form.value.description,
          price_per_hour: form.value.price_per_hour,
          category_id: parseInt(form.value.category_id),
          is_available: form.value.is_available,
          image: form.value.image,
        })


        console.log('Item created:', created)

        form.value = {
          name: '',
          description: '',
          image: null,
          category_id: '',
          price_per_hour: 0,
          is_available: true,
        }
         router.push({ name: 'item.index' });
      } catch (error) {
        console.error('Product creation failed:', error)
      }
    }


    onMounted(() => {
      categoryStore.fetchCategories()
    })

    return {
      form,
      categories,
      handleImageUpload,
      submit,
    }
  },
})
</script>
