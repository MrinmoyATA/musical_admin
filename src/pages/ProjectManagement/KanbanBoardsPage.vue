<template>
  <PageTitle pageTitle="Kanban Board" subTitle="Apps" />

  <KanbanBoard />
  <AddNewContactPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import KanbanBoard from "@/components/Pages/ProjectManagement/KanbanBoard/index.vue";
import AddNewContactPopup from "@/components/Pages/ProjectManagement/KanbanBoard/AddNewContactPopup.vue";

export default defineComponent({
  name: "KanbanBoardsPage",
  components: {
    PageTitle,
    KanbanBoard,
    AddNewContactPopup,
  },
});
</script>
