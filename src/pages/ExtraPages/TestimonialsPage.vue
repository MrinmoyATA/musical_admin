<template>
  <PageTitle pageTitle="Testimonials" subTitle="Extra Pages" />

  <Testimonials />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Testimonials from "@/components/Modules/ExtraPages/Testimonials/index.vue";

export default defineComponent({
  name: "TestimonialsPage",
  components: {
    PageTitle,
    Testimonials,
  },
});
</script>
