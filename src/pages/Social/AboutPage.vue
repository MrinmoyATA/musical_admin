<template>
  <PageTitle pageTitle="About Me" subTitle="Social" />

  <About />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import About from "@/components/Pages/Social/About/index.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    PageTitle,
    About,
  },
});
</script>
