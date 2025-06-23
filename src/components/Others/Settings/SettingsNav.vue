<template>
  <ul class="mb-[10px]">
    <li
      class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
    >
      <RouterLink
        to="/settings/account-settings"
        class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
      >
        Account Settings
      </RouterLink>
    </li>
    <li
      class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
    >
      <RouterLink
        to="/settings/change-password"
        class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
      >
        Change Password
      </RouterLink>
    </li>
    <li
      class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
    >
      <RouterLink
        to="/settings/connections"
        class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
      >
        Connections
      </RouterLink>
    </li>
    <li
      class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
    >
      <RouterLink
        to="/settings/privacy-policy"
        class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
      >
        Privacy Policy
      </RouterLink>
    </li>
    <li
      class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
    >
      <RouterLink
        to="/settings/terms-conditions"
        class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
      >
        Terms & Conditions
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingsNav",
});
</script>

<style lang="scss" scoped>
ul {
  li {
    a {
      &.active {
        --tw-bg-opacity: 1;
        background-color: rgb(96 93 255 / var(--tw-bg-opacity, 1));
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
      }
    }
  }
}
</style>
