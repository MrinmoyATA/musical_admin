<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <PaymentChart />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-[25px]">
        <TotalUsersChart />

        <RevenueChart />

        <ConversionChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <TopRefers />
    </div>
    <div class="lg:col-span-2">
      <ActiveUsersChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <LatestTransaction />
    </div>
    <div class="lg:col-span-1">
      <UpgradePlans />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <Users />
    </div>
    <div class="lg:col-span-2">
      <ProductTradeConditionChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <GrossRevenueChart />
    </div>
    <div class="lg:col-span-1">
      <SalesByCountry />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaymentChart from "@/components/Dashboard/SaaS/PaymentChart.vue";
import TotalUsersChart from "@/components/Dashboard/SaaS/TotalUsersChart.vue";
import RevenueChart from "@/components/Dashboard/SaaS/RevenueChart.vue";
import ConversionChart from "@/components/Dashboard/SaaS/ConversionChart.vue";
import TopRefers from "@/components/Dashboard/SaaS/TopRefers.vue";
import ActiveUsersChart from "@/components/Dashboard/SaaS/ActiveUsersChart.vue";
import LatestTransaction from "@/components/Dashboard/SaaS/LatestTransaction.vue";
import UpgradePlans from "@/components/Dashboard/SaaS/UpgradePlans.vue";
import Users from "@/components/Dashboard/SaaS/Users.vue";
import ProductTradeConditionChart from "@/components/Dashboard/SaaS/ProductTradeConditionChart.vue";
import GrossRevenueChart from "@/components/Dashboard/SaaS/GrossRevenueChart.vue";
import SalesByCountry from "@/components/Dashboard/SaaS/SalesByCountry.vue";

export default defineComponent({
  name: "SaaSPage",
  components: {
    PaymentChart,
    TotalUsersChart,
    RevenueChart,
    ConversionChart,
    TopRefers,
    ActiveUsersChart,
    LatestTransaction,
    UpgradePlans,
    Users,
    ProductTradeConditionChart,
    GrossRevenueChart,
    SalesByCountry,
  },
});
</script>
