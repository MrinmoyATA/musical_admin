<template>
  <PageTitle pageTitle="Kanban Board" subTitle="Apps" />
  <KanbanBoard />
  <AddNewCardPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import KanbanBoard from "@/components/Apps/KanbanBoard/index.vue";
import AddNewCardPopup from "@/components/Apps/KanbanBoard/AddNewCardPopup.vue";

export default defineComponent({
  name: "KanbanBoardPage",
  components: {
    PageTitle,
    KanbanBoard,
    AddNewCardPopup,
  },
});
</script>
