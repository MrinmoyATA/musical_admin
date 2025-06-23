<template>
  <PageTitle pageTitle="Users List" subTitle="Users" />

  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import UsersList from "@/components/Pages/Users/UsersList/index.vue";

export default defineComponent({
  name: "UsersListPage",
  components: {
    PageTitle,
    UsersList,
  },
});
</script>
