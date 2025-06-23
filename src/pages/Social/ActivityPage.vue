<template>
  <PageTitle pageTitle="Activity" subTitle="Social" />

  <Activity />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Activity from "@/components/Pages/Social/Activity/index.vue";

export default defineComponent({
  name: "ActivityPage",
  components: {
    PageTitle,
    Activity,
  },
});
</script>
