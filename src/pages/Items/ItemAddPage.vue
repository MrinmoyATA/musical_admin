<template>
  <div class="p-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div class="lg:col-span-2 space-y-6">

        <div class="bg-white shadow rounded-2xl p-6">
          <h2 class="text-xl font-semibold mb-4">Product Information</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium">Product Name</label>
              <input
                v-model="form.name"
                type="text"
                class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Short Description</label>
              <textarea
                v-model="form.short_description"
                rows="2"
                class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium">Long Description</label>
              <textarea
                v-model="form.long_description"
                rows="4"
                class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium">Image</label>
              <input
                type="file"
                @change="handleImageUpload"
                class="mt-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>

     
      <div class="space-y-6">
  
        <div class="bg-white shadow rounded-2xl p-6">
          <h2 class="text-xl font-semibold mb-4">Categories</h2>
          <div>
            <select
              v-model="form.category_id"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>



 
        <div class="flex justify-end">
          <button
            @click="submit"
            class="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'CreateProduct',
  setup() {
    const form = ref({
      name: '',
      short_description: '',
      long_description: '',
      image: null as File | null,
      category_id: '',
      tag_ids: [] as number[],
      price: 0,
      stock: 0,
    })

    const categories = ref([
      { id: 1, name: 'Instruments' },
      { id: 2, name: 'Rooms' },
      { id: 3, name: 'Accessories' },
    ])

    const tags = ref([
      { id: 1, name: 'New' },
      { id: 2, name: 'Popular' },
      { id: 3, name: 'Discounted' },
    ])

    const handleImageUpload = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (target.files?.length) {
        form.value.image = target.files[0]
      }
    }

    const submit = () => {
      const formData = new FormData()
      formData.append('name', form.value.name)
      formData.append('short_description', form.value.short_description)
      formData.append('long_description', form.value.long_description)
      if (form.value.image) {
        formData.append('image', form.value.image)
      }
      formData.append('category_id', form.value.category_id.toString())
      form.value.tag_ids.forEach(tagId =>
        formData.append('tag_ids[]', tagId.toString())
      )
      formData.append('price', form.value.price.toString())
      formData.append('stock', form.value.stock.toString())

      // Replace with your API call
      console.log('Submitting product form:', [...formData])
    }

    return {
      form,
      categories,
      tags,
      handleImageUpload,
      submit,
    }
  },
})
</script>
