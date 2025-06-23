<template>
  <PageTitle pageTitle="Popover" subTitle="UI Elements" />

  <Popover />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Popover from "@/components/Modules/UIElements/Popover/index.vue";

export default defineComponent({
  name: "PopoverPage",
  components: {
    PageTitle,
    Popover,
  },
});
</script>
