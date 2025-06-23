<template>
  <PageTitle pageTitle="Pricing" subTitle="Extra Pages" />

  <Pricing />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Pricing from "@/components/Modules/ExtraPages/Pricing/index.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    PageTitle,
    Pricing,
  },
});
</script>
