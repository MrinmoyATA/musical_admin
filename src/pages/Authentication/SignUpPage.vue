<template>
  <SignUp />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import SignUp from "@/components/Modules/Authentication/SignUp/index.vue";

export default defineComponent({
  name: "SignUpPage",
  components: {
    SignUp,
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
