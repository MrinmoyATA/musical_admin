<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] !pb-0 rounded-md"
  >
    <div class="trezo-card-content">
      <!-- Stats Stats -->
      <div class="trezo-card rounded-md">
        <WelcomeBack />
        <div class="trezo-card-content">
          <div class="sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-x-[25px]">
            <TotalSalesChart />
            <TotalOrdersChart />
            <TotalProfitChart />
            <TotalRevenueChart />
          </div>
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-2">
          <RecentEarningsChart />
        </div>
        <div class="lg:col-span-1">
          <SalesByLocations />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <TransactionHistory />
    </div>
    <div class="lg:col-span-2">
      <RecentOrders />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div>
      <RealTimeSalesChart />
    </div>
    <div>
      <SalesOverviewChart />
    </div>
    <div>
      <GrossEarningsChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBack from "@/components/Dashboard/Sales/WelcomeBack.vue";
import TotalSalesChart from "@/components/Dashboard/Sales/TotalSalesChart.vue";
import TotalOrdersChart from "@/components/Dashboard/Sales/TotalOrdersChart.vue";
import TotalProfitChart from "@/components/Dashboard/Sales/TotalProfitChart.vue";
import TotalRevenueChart from "@/components/Dashboard/Sales/TotalRevenueChart.vue";
import RecentEarningsChart from "@/components/Dashboard/Sales/RecentEarningsChart.vue";
import SalesByLocations from "@/components/Dashboard/Sales/SalesByLocations.vue";
import TransactionHistory from "@/components/Dashboard/Sales/TransactionHistory.vue";
import RecentOrders from "@/components/Dashboard/Sales/RecentOrders.vue";
import RealTimeSalesChart from "@/components/Dashboard/Sales/RealTimeSalesChart.vue";
import SalesOverviewChart from "@/components/Dashboard/Sales/SalesOverviewChart.vue";
import GrossEarningsChart from "@/components/Dashboard/Sales/GrossEarningsChart.vue";

export default defineComponent({
  name: "SalesPage",
  components: {
    WelcomeBack,
    TotalSalesChart,
    TotalOrdersChart,
    TotalProfitChart,
    TotalRevenueChart,
    RecentEarningsChart,
    SalesByLocations,
    TransactionHistory,
    RecentOrders,
    RealTimeSalesChart,
    SalesOverviewChart,
    GrossEarningsChart,
  },
});
</script>
