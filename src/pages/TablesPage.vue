<template>
  <PageTitle pageTitle="Tables" subTitle="MODULES" />

  <Tables />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Tables from "@/components/Modules/Tables/index.vue";

export default defineComponent({
  name: "TablesPage",
  components: {
    PageTitle,
    Tables,
  },
});
</script>
