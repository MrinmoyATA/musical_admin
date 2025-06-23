<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <Congratulations />

      <div
        class="sm:grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-[25px]"
      >
        <TicketsResolvedChart />
        <TicketsInProgressChart />
        <TicketsDueChart />
        <TicketsNewOpenChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <TicketsStatusChart />

      <div class="lg:grid xl:grid-cols-2 gap-x-[25px]">
        <CustomerSatisfactionChart />
        <ResponseTimeChart />
      </div>
    </div>
  </div>

  <PerformanceOfAgents />

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <NewAndSolvedTicketsChart />
    </div>
    <div class="lg:col-span-2">
      <RecentCustomerRatings />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <ToDoList />
    </div>
    <div class="lg:col-span-1">
      <TaskOverviewChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Congratulations from "@/components/Dashboard/HelpDesk/Congratulations.vue";
import TicketsResolvedChart from "@/components/Dashboard/HelpDesk/TicketsResolvedChart.vue";
import TicketsInProgressChart from "@/components/Dashboard/HelpDesk/TicketsInProgressChart.vue";
import TicketsDueChart from "@/components/Dashboard/HelpDesk/TicketsDueChart.vue";
import TicketsNewOpenChart from "@/components/Dashboard/HelpDesk/TicketsNewOpenChart.vue";
import TicketsStatusChart from "@/components/Dashboard/HelpDesk/TicketsStatusChart.vue";
import CustomerSatisfactionChart from "@/components/Dashboard/HelpDesk/CustomerSatisfactionChart.vue";
import ResponseTimeChart from "@/components/Dashboard/HelpDesk/ResponseTimeChart.vue";
import PerformanceOfAgents from "@/components/Dashboard/HelpDesk/PerformanceOfAgents.vue";
import NewAndSolvedTicketsChart from "@/components/Dashboard/HelpDesk/NewAndSolvedTicketsChart.vue";
import RecentCustomerRatings from "@/components/Dashboard/HelpDesk/RecentCustomerRatings.vue";
import ToDoList from "@/components/Dashboard/HelpDesk/ToDoList.vue";
import TaskOverviewChart from "@/components/Dashboard/HelpDesk/TaskOverviewChart.vue";

export default defineComponent({
  name: "HelpDeskPage",
  components: {
    Congratulations,
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    TicketsStatusChart,
    CustomerSatisfactionChart,
    ResponseTimeChart,
    PerformanceOfAgents,
    NewAndSolvedTicketsChart,
    RecentCustomerRatings,
    ToDoList,
    TaskOverviewChart,
  },
});
</script>
