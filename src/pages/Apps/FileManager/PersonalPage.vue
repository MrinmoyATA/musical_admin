<template>
  <PageTitle pageTitle="Personal" subTitle="File Manager" />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>

    <div class="lg:col-span-3">
      <Personal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/FileManager/Sidebar.vue";
import Personal from "@/components/Apps/FileManager/Personal/index.vue";

export default defineComponent({
  name: "PersonalPage",
  components: {
    PageTitle,
    Sidebar,
    Personal,
  },
});
</script>
