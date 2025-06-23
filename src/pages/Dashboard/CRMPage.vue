<template>
  <div>
    <div
      class="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] lg:gap-[25px]"
    >
      <RevenueGrowthChart />

      <LeadConversionChart />

      <TotalOrdersChart />

      <AnnualProfitChart />
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <BalanceOverviewChart />
      </div>
      <div class="lg:col-span-1">
        <LeadsBySourceChart />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-1">
        <TopPerformers />
      </div>
      <div class="lg:col-span-2">
        <RecentLeads />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <SalesReportChart />
      </div>
      <div class="lg:col-span-1">
        <TopProductsBySales />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RevenueGrowthChart from "@/components/Dashboard/CRM/RevenueGrowthChart.vue";
import LeadConversionChart from "@/components/Dashboard/CRM/LeadConversionChart.vue";
import TotalOrdersChart from "@/components/Dashboard/CRM/TotalOrdersChart.vue";
import AnnualProfitChart from "@/components/Dashboard/CRM/AnnualProfitChart.vue";
import BalanceOverviewChart from "@/components/Dashboard/CRM/BalanceOverviewChart.vue";
import LeadsBySourceChart from "@/components/Dashboard/CRM/LeadsBySourceChart.vue";
import TopPerformers from "@/components/Dashboard/CRM/TopPerformers.vue";
import RecentLeads from "@/components/Dashboard/CRM/RecentLeads.vue";
import SalesReportChart from "@/components/Dashboard/CRM/SalesReportChart.vue";
import TopProductsBySales from "@/components/Dashboard/CRM/TopProductsBySales.vue";

export default defineComponent({
  name: "CRMPage",
  components: {
    RevenueGrowthChart,
    LeadConversionChart,
    TotalOrdersChart,
    AnnualProfitChart,
    BalanceOverviewChart,
    LeadsBySourceChart,
    TopPerformers,
    RecentLeads,
    SalesReportChart,
    TopProductsBySales,
  },
});
</script>
