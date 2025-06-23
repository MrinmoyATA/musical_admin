<template>
  <PageTitle pageTitle="Leads" subTitle="CRM" />

  <Leads />
  <AddNewLeadPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Leads from "@/components/Pages/CRM/Leads/index.vue";
import AddNewLeadPopup from "@/components/Pages/CRM/Leads/AddNewLeadPopup.vue";

export default defineComponent({
  name: "LeadsPage",
  components: {
    PageTitle,
    Leads,
    AddNewLeadPopup,
  },
});
</script>
