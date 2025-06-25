<template>
    <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
        <div class="trezo-tabs products-tabs" id="trezo-tabs">
            <div class="products-tab-content">
                <div class="tab-pane" v-show="activeTab === 'allProducts'">
                    <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
                        <div class="trezo-card-title">
                            <form class="relative sm:w-[265px]" @submit.prevent="onSearch">
                                <label
                                    class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
                                    <i class="material-symbols-outlined !text-[20px]"> search </i>
                                </label>
                                <input v-model="searchQuery" type="text" placeholder="Search product here....."
                                    class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400" />
                            </form>
                        </div>
                        <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
                            <RouterLink to="/ecommerce/create-product"
                                class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
                                id="add-new-popup-toggle">
                                <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                                    <i
                                        class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                                        add
                                    </i>
                                    Add New Product
                                </span>
                            </RouterLink>
                        </div>
                    </div>

                    <div class="trezo-card-content">
                        <div v-if="loading" class="text-center py-6">Loading items...</div>

                        <div v-else class="table-responsive overflow-x-auto">
                            <table class="w-full">
                                <thead class="text-black dark:text-white">
                                    <tr>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            ID</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Product
                                        </th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Category
                                        </th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Price</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Order</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Stock</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Amount</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Rating</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Status</th>
                                        <th
                                            class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                            Active</th>
                                    </tr>
                                </thead>
                                <tbody class="text-black dark:text-white">
                                    <tr v-for="item in items" :key="item.id">
                                        <td
                                            class="text-gray-500 dark:text-gray-400 px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            #ITEM-{{ item.id }}
                                        </td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            <div class="flex items-center">
                                                <div class="rounded-md w-[40px] h-[40px] overflow-hidden">
                                                    <img v-if="item.image" :src="`/storage/${item.image}`"
                                                        class="inline-block rounded-md object-cover w-full h-full"
                                                        alt="product-image" />
                                                    <div v-else
                                                        class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                                                        N/A
                                                    </div>
                                                </div>
                                                <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                    <RouterLink :to="`/ecommerce/product-details/${item.id}`"
                                                        class="font-medium text-[14px] md:text-[15px] hover:text-primary-500">
                                                        {{ item.name }}
                                                    </RouterLink>
                                                    <span class="block text-sm text-gray-500 dark:text-gray-400">
                                                        {{ new Date(item.created_at).toLocaleDateString() }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            #{{ item.category_id }}</td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            ${{ item.price_per_hour.toFixed(2) }}
                                        </td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">—
                                        </td>
                                        <!-- Order count placeholder -->

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            {{ item.is_available ? "Available" : "Out of Stock" }}
                                        </td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">—
                                        </td>
                                        <!-- Amount placeholder -->

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">—
                                        </td>
                                        <!-- Rating placeholder -->

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            <span
                                                class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs">
                                                {{ item.is_available ? "Published" : "Unpublished" }}
                                            </span>
                                        </td>

                                        <td class="px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]">
                                            <div class="flex items-center gap-[9px]">
                                                <RouterLink :to="`/ecommerce/product-details/${item.id}`"
                                                    class="text-primary-500 custom-tooltip" v-tooltip="'View'">
                                                    <i class="material-symbols-outlined !text-md">visibility</i>
                                                </RouterLink>
                                                <RouterLink :to="`/ecommerce/edit-product/${item.id}`"
                                                    class="text-gray-500 dark:text-gray-400 custom-tooltip"
                                                    v-tooltip="'Edit'">
                                                    <i class="material-symbols-outlined !text-md">edit</i>
                                                </RouterLink>
                                                <button type="button" class="text-danger-500 custom-tooltip"
                                                    v-tooltip="'Delete'" @click="deleteItem(item.id)">
                                                    <i class="material-symbols-outlined !text-md">delete</i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <Pagination v-if="pagination" :items="pagination.per_page" :total="pagination.total"
                            :current-page="pagination.current_page" @page-change="onPageChange" />

                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useItemStore } from "@/stores/ItemStore";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "ProductsList",
  components: { Pagination },
  setup() {
    const itemStore = useItemStore();
    const loading = ref(false);
    const activeTab = ref("allProducts");
    const searchQuery = ref("");

    // Computed wrappers for reactive access
    const items = computed(() => itemStore.items);
    const pagination = computed(() => itemStore.pagination);

    const fetchItems = async (page = 1) => {
      loading.value = true;
      try {
        await itemStore.getItems({ page, search: searchQuery.value });
      console.log(itemStore.items);
console.log(itemStore.pagination);
      } catch (error) {
        console.error("Error loading items:", error);
      } finally {
        loading.value = false;
      }
    };

    fetchItems();

    const onPageChange = (page: number) => {
      fetchItems(page);
    };

    const onSearch = () => {
      fetchItems(1);
    };

    const deleteItem = async (id: number) => {
      if (!confirm("Are you sure you want to delete this item?")) return;
      try {
        await itemStore.deleteItem(id);
        fetchItems(pagination.value?.current_page || 1);
      } catch (error) {
        console.error("Failed to delete item:", error);
      }
    };

    return {
      activeTab,
      searchQuery,
      loading,
      items,
      pagination,
      fetchItems,
      onPageChange,
      onSearch,
      deleteItem,
    };
  },
});

</script>

<style scoped>
/* Add any component-specific styles if needed */
</style>
