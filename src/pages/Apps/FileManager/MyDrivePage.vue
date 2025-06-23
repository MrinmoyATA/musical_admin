<template>
  <PageTitle pageTitle="My Drive" subTitle="File Manager" />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>
    <div class="lg:col-span-3">
      <MyDriveFiles />

      <RecentFiles />
    </div>
  </div>
  <AddNewFilePopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/FileManager/Sidebar.vue";
import MyDriveFiles from "@/components/Apps/FileManager/MyDrive/MyDriveFiles.vue";
import RecentFiles from "@/components/Apps/FileManager/MyDrive/RecentFiles.vue";
import AddNewFilePopup from "@/components/Apps/FileManager/MyDrive/AddNewFilePopup.vue";

export default defineComponent({
  name: "MyDrivePage",
  components: {
    PageTitle,
    Sidebar,
    MyDriveFiles,
    RecentFiles,
    AddNewFilePopup,
  },
});
</script>
