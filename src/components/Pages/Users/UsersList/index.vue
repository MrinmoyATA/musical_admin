<template>
  <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
    <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input v-model="query" @input="onQueryChange" type="text" placeholder="Search user here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400" />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <RouterLink to="/users/add-user"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white">
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
              add
            </i>
            Add New User
          </span>
        </RouterLink>
      </div>
    </div>

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                User ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                User
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Email
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Phone
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Role
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Join Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="(user, idx) in users" :key="user.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                #{{ serialStart + idx + 1 }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img v-if="user.profile_image" :src="user.profile_image"
                      class="inline-block rounded-full w-10 h-10 object-cover" alt="user-image" />
                    <div v-else
                      class="inline-block rounded-full bg-gray-200 dark:bg-gray-700 w-10 h-10 flex items-center justify-center">
                      <i class="material-symbols-outlined">person</i>
                    </div>
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium">{{ user.name }}</span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                {{ user.email }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                {{ user.phone || 'N/A' }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                <span :class="{
                  'bg-primary-100 text-primary-500': user.role === 'admin',
                  'bg-gray-100 text-gray-500': user.role === 'user',
                }" class="text-xs px-[10px] py-[3px] rounded-md capitalize">
                  {{ user.role }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                <span :class="{
                  'bg-success-100 text-success-500': user.is_active,
                  'bg-danger-100 text-danger-500': !user.is_active,
                }" class="text-xs px-[10px] py-[3px] rounded-md">
                  {{ user.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                {{ formatDate(user.created_at) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                <div class="flex items-center gap-[9px]">
                  <RouterLink :to="`/users/${user.id}`" class="text-primary-500 leading-none custom-tooltip"
                    id="customTooltip" data-text="View">
                    <i class="material-symbols-outlined !text-md"> visibility </i>
                  </RouterLink>
                  <RouterLink :to="`/users/${user.id}/edit`"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip"
                    data-text="Edit">
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </RouterLink>
                  <button type="button" @click="deleteUser(user.id)" class="text-danger-500 leading-none custom-tooltip"
                    id="customTooltip" data-text="Delete">
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="users.length === 0 && !isProcessing">
              <td colspan="8"
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] text-center">
                No users found
              </td>
            </tr>
            <tr v-if="isProcessing">
              <td colspan="8"
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] text-center">
                Loading...
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AppPagination v-if="pagination" :currentPage="pagination.current_page" :lastPage="pagination.last_page"
        :total="pagination.total" :from="pagination.from ?? 0" :to="pagination.to ?? 0" @change="onPageChange" class="px-[20px] md:px-[25px]"/>


    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppPagination from '@/components/Common/Pagination.vue';
import { useUserStore } from '@/stores/UserStore';
import type { PaginatedUsers } from '@/stores/UserStore';

export default defineComponent({
  name: 'UsersListPage',
  components: { AppPagination },

  data() {
    return {
      isProcessing: false,
      query: '',
      from_date: '',
      to_date: '',
    };
  },

  computed: {
    pagination(): PaginatedUsers {
      return useUserStore().pagination!;
    },
    users() {
      return useUserStore().users.filter(u => u.role === 'user');
    },
    serialStart(): number {

      return (this.pagination.current_page - 1) * this.pagination.per_page;
    },
  },

  methods: {
    formatDate(dateString: string) {
      return new Date(dateString).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    },

    async fetchUsers(query: Record<string, any> = {}) {
      this.isProcessing = true;
      try {
        await useUserStore().getUsers(query);
      } catch (e) {
        console.error('Failed to fetch users:', e);
      } finally {
        this.isProcessing = false;
      }
    },

    onQueryChange() {
      const q = { ...this.$route.query };
      if (this.query) q.q = this.query;
      if (this.from_date) q.from_date = this.from_date.slice(0, 10);
      if (this.to_date) q.to_date = this.to_date.slice(0, 10);
      this.$router.replace({ name: 'UsersListPage', query: q });
    },

    onPageChange(page: number) {
      this.$router.replace({ name: 'UsersListPage', query: { ...this.$route.query, page } });
    },

    async deleteUser(id: number) {
      if (!confirm('Are you sure?')) return;
      this.isProcessing = true;
      try {
        await useUserStore().deleteUser(id);
        await this.fetchUsers(this.$route.query);
      } finally {
        this.isProcessing = false;
      }
    },
  },

  mounted() {
    this.fetchUsers(this.$route.query);
  },

  watch: {
    '$route.query': {
      handler(newQ) { this.fetchUsers(newQ); },
      immediate: true,
    },
  },
});
</script>
