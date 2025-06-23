<template>
  <PageTitle pageTitle="Notification" subTitle="MODULES" />

  <Notifications />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Notifications from "@/components/Modules/Notifications/index.vue";

export default defineComponent({
  name: "NotificationPage",
  components: {
    PageTitle,
    Notifications,
  },
});
</script>
