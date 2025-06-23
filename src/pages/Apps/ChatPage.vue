<template>
  <PageTitle pageTitle="Chat" subTitle="Apps" />
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <Sidebar />
    </div>
    <div class="lg:col-span-2">
      <Chat />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sidebar from "@/components/Apps/Chat/Sidebar.vue";
import Chat from "@/components/Apps/Chat/index.vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    PageTitle,
    Sidebar,
    Chat,
  },
});
</script>
