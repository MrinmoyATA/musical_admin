<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <Overview />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <InboundCallsChart />

        <OutboundCallsChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <AgentsPerformanceOverview />

    <CallCenterGeography />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <AgentAvgEarnings />
    </div>
    <div class="lg:col-span-2">
      <RecentCalls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Overview from "@/components/Dashboard/CallCenter/Overview/index.vue";
import InboundCallsChart from "@/components/Dashboard/CallCenter/InboundCallsChart.vue";
import OutboundCallsChart from "@/components/Dashboard/CallCenter/OutboundCallsChart.vue";
import AgentsPerformanceOverview from "@/components/Dashboard/CallCenter/AgentsPerformanceOverview.vue";
import CallCenterGeography from "@/components/Dashboard/CallCenter/CallCenterGeography.vue";
import AgentAvgEarnings from "@/components/Dashboard/CallCenter/AgentAvgEarnings/index.vue";
import RecentCalls from "@/components/Dashboard/CallCenter/RecentCalls.vue";

export default defineComponent({
  name: "CallCenterPage",
  components: {
    Overview,
    InboundCallsChart,
    OutboundCallsChart,
    AgentsPerformanceOverview,
    CallCenterGeography,
    AgentAvgEarnings,
    RecentCalls,
  },
});
</script>
