<template>
  <PageTitle pageTitle="Users" subTitle="Project Management" />

  <Users />
  <AddNewUserPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Users from "@/components/Pages/ProjectManagement/Users/index.vue";
import AddNewUserPopup from "@/components/Pages/ProjectManagement/Users/AddNewUserPopup.vue";

export default defineComponent({
  name: "UserPage",
  components: {
    PageTitle,
    Users,
    AddNewUserPopup,
  },
});
</script>
