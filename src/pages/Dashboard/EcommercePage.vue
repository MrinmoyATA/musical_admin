<template>
  <div>
    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <WelcomeDashboard />

        <TotalSalesChart />
      </div>
      <div class="lg:col-span-1">
        <TotalOrdersChart />

        <TotalCustomersChart />

        <TotalRevenueChart />
      </div>
    </div>


    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <RecentOrders />
      </div>
      <div class="lg:col-span-1">
        <OrderSummaryChart />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeDashboard from "@/components/Dashboard/Ecommerce/WelcomeDashboard.vue";
import TotalSalesChart from "@/components/Dashboard/Ecommerce/TotalSalesChart.vue";
import TotalOrdersChart from "@/components/Dashboard/Ecommerce/TotalOrdersChart.vue";
import TotalCustomersChart from "@/components/Dashboard/Ecommerce/TotalCustomersChart.vue";
import TotalRevenueChart from "@/components/Dashboard/Ecommerce/TotalRevenueChart.vue";
import RecentOrders from "@/components/Dashboard/Ecommerce/RecentOrders.vue";
import OrderSummaryChart from "@/components/Dashboard/Ecommerce/OrderSummaryChart.vue";


export default defineComponent({
  name: "EcommercePage",
  components: {
    WelcomeDashboard,
    TotalSalesChart,
    TotalOrdersChart,
    TotalCustomersChart,
    TotalRevenueChart,
    RecentOrders,
    OrderSummaryChart,

  },
});
</script>
