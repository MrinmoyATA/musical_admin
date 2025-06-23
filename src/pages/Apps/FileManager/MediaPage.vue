<template>
  <PageTitle pageTitle="Media" subTitle="File Manager" />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>
    <div class="lg:col-span-3">
      <Media />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/FileManager/Sidebar.vue";
import Media from "@/components/Apps/FileManager/Media/index.vue";

export default defineComponent({
  name: "MediaPage",
  components: {
    PageTitle,
    Sidebar,
    Media,
  },
});
</script>
