<template>
  <PageTitle pageTitle="Avatar" subTitle="UI Elements" />

  <Avatar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Avatar from "@/components/Modules/UIElements/Avatar/index.vue";

export default defineComponent({
  name: "AvatarPage",
  components: {
    PageTitle,
    Avatar,
  },
});
</script>
