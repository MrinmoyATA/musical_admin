<template>
  <ForgotPassword />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import ForgotPassword from "@/components/Modules/Authentication/ForgotPassword/index.vue";

export default defineComponent({
  name: "ForgotPasswordPage",
  components: {
    ForgotPassword,
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
