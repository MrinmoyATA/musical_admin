<template>
  <PageTitle pageTitle="Ticket Details" subTitle="HelpDesk" />

  <TicketDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import TicketDetails from "@/components/Pages/HelpDesk/TicketDetails/index.vue";

export default defineComponent({
  name: "TicketDetailsPage",
  components: {
    PageTitle,
    TicketDetails,
  },
});
</script>
