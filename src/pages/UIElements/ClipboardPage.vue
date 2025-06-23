<template>
  <PageTitle pageTitle="Clipboard" subTitle="UI Elements" />

  <Clipboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Clipboard from "@/components/Modules/UIElements/Clipboard/index.vue";

export default defineComponent({
  name: "ClipboardPage",
  components: {
    PageTitle,
    Clipboard,
  },
});
</script>
