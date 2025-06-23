<template>
  <PageTitle pageTitle="Modals" subTitle="UI Elements" />

  <Modals />

  <!-- <LiveDemoPopup /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Modals from "@/components/Modules/UIElements/Modals/index.vue";
// import LiveDemoPopup from "@/components/Modules/UIElements/Modals/LiveDemoPopup.vue";

export default defineComponent({
  name: "ImagesPage",
  components: {
    PageTitle,
    Modals,
    // LiveDemoPopup,
  },
});
</script>
