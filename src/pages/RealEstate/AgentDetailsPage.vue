<template>
  <PageTitle pageTitle="Agent Details" subTitle="Real Estate" />

  <AgentDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AgentDetails from "@/components/Pages/RealEstate/AgentDetails/index.vue";

export default defineComponent({
  name: "AgentDetailsPage",
  components: {
    PageTitle,
    AgentDetails,
  },
});
</script>
