<template>
  <AdminLogoutComponent />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import AdminLogoutComponent from "@/components/Modules/Authentication/Logout/AdminLogout.vue";

export default defineComponent({
  name: "AdminLogoutPage", 
  components: {
    AdminLogoutComponent,  
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>
