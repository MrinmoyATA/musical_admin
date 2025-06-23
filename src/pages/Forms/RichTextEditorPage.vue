<template>
  <PageTitle pageTitle="Rich Text Editor" subTitle="Forms" />

  <RichTextEditor />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RichTextEditor from "@/components/Modules/Forms/RichTextEditor/index.vue";

export default defineComponent({
  name: "RichTextEditorPage",
  components: {
    PageTitle,
    RichTextEditor,
  },
});
</script>
