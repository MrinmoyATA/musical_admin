<template>
  <PageTitle pageTitle="Important" subTitle="File Manager" />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>
    <div class="lg:col-span-3">
      <Important />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/FileManager/Sidebar.vue";
import Important from "@/components/Apps/FileManager/Important/index.vue";

export default defineComponent({
  name: "ImportantFilesPage",
  components: {
    PageTitle,
    Sidebar,
    Important,
  },
});
</script>
