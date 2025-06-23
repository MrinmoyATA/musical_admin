<template>
  <SignIn />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import SignIn from "@/components/Modules/Authentication/SignIn/index.vue";

export default defineComponent({
  name: "SignInPage",
  components: {
    SignIn,
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
