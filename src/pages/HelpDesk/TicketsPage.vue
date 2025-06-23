<template>
  <PageTitle pageTitle="Tickets" subTitle="HelpDesk" />

  <Tickets />
  <AddNewTicketPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Tickets from "@/components/Pages/HelpDesk/Tickets/index.vue";
import AddNewTicketPopup from "@/components/Pages/HelpDesk/Tickets/AddNewTicketPopup.vue";

export default defineComponent({
  name: "TicketsPage",
  components: {
    PageTitle,
    Tickets,
    AddNewTicketPopup,
  },
});
</script>
