<template>
  <PageTitle pageTitle="Timeline" subTitle="Extra Pages" />

  <Timeline />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Timeline from "@/components/Modules/ExtraPages/Timeline/index.vue";

export default defineComponent({
  name: "TimelinePage",
  components: {
    PageTitle,
    Timeline,
  },
});
</script>
