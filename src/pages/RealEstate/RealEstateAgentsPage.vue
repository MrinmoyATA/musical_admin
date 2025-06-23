<template>
  <PageTitle pageTitle="Agent List" subTitle="Real Estate" />

  <AgentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AgentList from "@/components/Pages/RealEstate/Agents/index.vue";

export default defineComponent({
  name: "RealEstateAgentsPage",
  components: {
    PageTitle,
    AgentList,
  },
});
</script>
