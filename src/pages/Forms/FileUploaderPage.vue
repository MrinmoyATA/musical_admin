<template>
  <PageTitle pageTitle="File Uploader" subTitle="Forms" />

  <FileUploader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import FileUploader from "@/components/Modules/Forms/FileUploader/index.vue";

export default defineComponent({
  name: "FileUploaderPage",
  components: {
    PageTitle,
    FileUploader,
  },
});
</script>
