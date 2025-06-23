<template>
  <PageTitle pageTitle="Deals" subTitle="CRM" />

  <Deals />
  <AddNewDealPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Deals from "@/components/Pages/CRM/Deals/index.vue";
import AddNewDealPopup from "@/components/Pages/CRM/Deals/AddNewDealPopup.vue";

export default defineComponent({
  name: "DealsPage",
  components: {
    PageTitle,
    Deals,
    AddNewDealPopup,
  },
});
</script>
