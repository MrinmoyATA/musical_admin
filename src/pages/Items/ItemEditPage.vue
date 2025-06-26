<template>
    <form @submit.prevent="submit">
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <div class="bg-white shadow rounded-md p-6">
                        <h2 class="text-xl font-semibold mb-4">Edit Item</h2>

                        <div v-if="loading" class="text-center py-8">
                            Loading item data...
                        </div>

                        <div v-else class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium">Item Name</label>
                                <input v-model="form.name" type="text"
                                    class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Description</label>
                                <textarea v-model="form.description" rows="4"
                                    class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Price</label>
                                <input v-model.number="form.price_per_hour" type="number" step="0.01"
                                    class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                            <div class="flex items-center space-x-2">
                                <input v-model="form.is_available" type="checkbox" id="available" true-value="1"
                                    false-value="0" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="available" class="text-sm font-medium">Available</label>
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Upload Image</label>
                                <div v-if="form.existing_image" class="mb-4">
                                    <img :src="getImageUrl(form.existing_image)" alt="Current item image"
                                        class="h-32 object-cover rounded-md" />
                                </div>
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
                                    <input type="file"
                                        class="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
                                        @change="handleImageUpload" />
                                </div>
                                <div v-if="form.image" class="mt-2 text-sm text-gray-600">
                                    Selected file: {{ form.image.name }}
                                </div>
                                <div v-else-if="form.existing_image" class="mt-2 text-sm text-gray-600">
                                    Current image: {{ form.existing_image.split("/").pop() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow rounded-md p-6 space-y-6">
                    <h2 class="text-xl font-semibold mb-4">Category</h2>
                    <div class="mb-[20px] sm:mb-0">
                        <select v-model="form.category_id"
                            class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                            :disabled="!categories.length">
                            <option value="" disabled>Select a category</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>

                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <button type="button" @click="$router.back()"
                class="font-medium py-[10px] px-[20px] bg-danger-500 text-white rounded hover:bg-danger-400">
                Cancel
            </button>
            <button type="submit" :disabled="!form.category_id || loading"
                class="font-medium py-[10px] px-[20px] bg-primary-500 text-white rounded hover:bg-primary-400 ml-2">
                <span class="inline-block relative pl-[29px]">
                    <i class="material-symbols-outlined absolute top-1/2 -translate-y-1/2">save</i>
                    Update Item
                </span>
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "@/stores/CategoryStore";
import { useItemStore } from "@/stores/ItemStore";
import { storeToRefs } from "pinia";
import { getImageUrl } from "@/utils/helpers";

export default defineComponent({
    name: "ItemEditPage",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const itemId = Number(route.params.id);
        const categoryStore = useCategoryStore();
        const itemStore = useItemStore();
        const { categories } = storeToRefs(categoryStore);
        const loading = ref(true);
        const error = ref<string | null>(null);

        const form = ref({
            name: "",
            description: "",
            image: null as File | null,
            existing_image: "",
            category_id: null as number | null,
            price_per_hour: 0,
            is_available: true,
        });

        const loadItem = async () => {
            try {
                loading.value = true;
                error.value = null;

                const item = await itemStore.getItemById(itemId);
                console.log("API Item Response:", item);
                if (!item) throw new Error("Item not found");
                form.value = {
                    name: item.name,
                    description: item.description || "",
                    image: null,
                    existing_image: item.image ? `${item.image}` : "",
                    category_id: item.category_id ? Number(item.category_id) : null,
                    price_per_hour: item.price_per_hour,
                    is_available: item.is_available,
                };

                console.log("Form initialized with:", form.value);
            } catch (err) {
                console.error("Error loading item:", err);
                error.value = err instanceof Error ? err.message : "Failed to load item data";
            } finally {
                loading.value = false;
            }
        };

        const handleImageUpload = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.files?.length) {
                form.value.image = target.files[0];
            }
        };

        const submit = async () => {
            try {
                loading.value = true;
                error.value = null;

                if (!form.value.category_id) {
                    throw new Error("Category is required");
                }

                await itemStore.updateItem(itemId, {
                    name: form.value.name,
                    description: form.value.description,
                    category_id: form.value.category_id,
                    price_per_hour: form.value.price_per_hour,
                    is_available: form.value.is_available,
                    image: form.value.image,
                });

                router.push({ name: "item.index" });
            } catch (err) {
                console.error("Item update failed:", err);
                error.value = "Failed to update item";
            } finally {
                loading.value = false;
            }
        };

        onMounted(async () => {
            try {
                await Promise.all([
                    categoryStore.fetchCategories(),
                    loadItem()
                ]);
                console.log("Categories loaded:", categories.value);
            } catch (err) {
                console.error("Initialization error:", err);
            }
        });

        return {
            form,
            categories,
            loading,
            error,
            handleImageUpload,
            submit,
            getImageUrl,
        };
    },
});
</script>
