<template>
  <PageTitle pageTitle="Projects" subTitle="File Manager" />
  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>

    <div class="lg:col-span-3">
      <Projects />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/FileManager/Sidebar.vue";
import Projects from "@/components/Apps/FileManager/Projects/index.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    PageTitle,
    Sidebar,
    Projects,
  },
});
</script>
