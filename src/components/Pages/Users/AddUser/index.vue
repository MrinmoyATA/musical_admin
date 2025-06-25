<template>
  <form @submit.prevent="submitForm">
    <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
      <div class="trezo-card-content">
        <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
          <!-- Name -->
          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Name *
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="E.g. Olivia John"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] w-full outline-0"
            />
          </div>

          <!-- Email -->
          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Email *
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="E.g. olivia@example.com"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] w-full outline-0"
            />
          </div>

          <!-- Phone -->
          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Phone Number
            </label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="E.g. +1 555-445-4455"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] w-full outline-0"
            />
          </div>

          <!-- Password -->
          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Password *
            </label>
            <input
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] w-full outline-0"
            />
          </div>

          <!-- Role -->
          <div class="mb-[20px] sm:mb-0">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Role
            </label>
            <select
              v-model="form.role"
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] w-full outline-0"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <!-- Status -->
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

          <!-- Profile Image -->
          <div class="sm:col-span-2 mb-[20px]">
            <label class="mb-[10px] text-black dark:text-white font-medium block">
              Profile Image
            </label>
            <div class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]">
              <div class="flex items-center justify-center">
                <div class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px]">
                  <i class="ri-upload-2-line"></i>
                </div>
                <p class="leading-[1.5]">
                  <strong class="text-black dark:text-white">Click to upload</strong><br />
                  your profile image
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
            Add User
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/UserStore';

export default defineComponent({
  name: 'AddUserPage',

  data() {
    return {
      form: {
        name: '' as string,
        email: '' as string,
        phone: '' as string,
        password: '' as string,
        role: 'user' as 'user' | 'admin',
        is_active: true as boolean,
        profile_image: null as File | null,
      },
      isProcessing: false as boolean,
    };
  },

  methods: {
    handleImageUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.form.profile_image = input.files[0];
      }
    },

    async submitForm() {
      this.isProcessing = true;
      try {
        const userStore = useUserStore();

        const userData = {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          password: this.form.password,
          role: this.form.role,
          is_active: this.form.is_active,
        };

        const newUser = await userStore.createUser(userData);

        if (this.form.profile_image && newUser.id) {
          await userStore.uploadImage(newUser.id, this.form.profile_image);
        }

        // Redirect via Options API
        this.$router.push({ name: 'UsersListPage' });
      } catch (error) {
        console.error('Error creating user:', error);
      } finally {
        this.isProcessing = false;
      }
    },
  },
});
</script>
