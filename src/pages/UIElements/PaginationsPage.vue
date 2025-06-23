<template>
  <PageTitle pageTitle="Paginations" subTitle="UI Elements" />

  <Paginations />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Paginations from "@/components/Modules/UIElements/Paginations/index.vue";

export default defineComponent({
  name: "PaginationsPage",
  components: {
    PageTitle,
    Paginations,
  },
});
</script>
