<template>
  <PageTitle pageTitle="Property List" subTitle="Real Estate" />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <PropertyDetails />
    </div>

    <div class="lg:col-span-1">
      <Owner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PropertyDetails from "@/components/Pages/RealEstate/PropertyDetails/index.vue";
import Owner from "@/components/Pages/RealEstate/PropertyDetails/Owner.vue";

export default defineComponent({
  name: "PropertyDetailsPage",
  components: {
    PageTitle,
    PropertyDetails,
    Owner,
  },
});
</script>
