<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <ActiveTotalProperty />

        <RevenueChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <NewListingsSoldPropertiesChart />
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <PropertiesForSaleChart />

    <PropertiesForRentChart />

    <NewCustomers />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <MostSalesLocation />
    </div>
    <div class="lg:col-span-2">
      <RentalIncomeChart />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <SocialSearchChart />

        <RecentProperty />
      </div>
    </div>
    <div class="lg:col-span-2">
      <CustomerReviews />
    </div>
    <div class="lg:col-span-1">
      <TopProperty />
    </div>
  </div>

  <LatestTransaction />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActiveTotalProperty from "@/components/Dashboard/RealEstate/ActiveTotalProperty.vue";
import RevenueChart from "@/components/Dashboard/RealEstate/RevenueChart.vue";
import NewListingsSoldPropertiesChart from "@/components/Dashboard/RealEstate/NewListingsSoldPropertiesChart.vue";
import PropertiesForSaleChart from "@/components/Dashboard/RealEstate/PropertiesForSaleChart.vue";
import PropertiesForRentChart from "@/components/Dashboard/RealEstate/PropertiesForRentChart.vue";
import NewCustomers from "@/components/Dashboard/RealEstate/NewCustomers.vue";
import MostSalesLocation from "@/components/Dashboard/RealEstate/MostSalesLocation.vue";
import RentalIncomeChart from "@/components/Dashboard/RealEstate/RentalIncomeChart.vue";
import SocialSearchChart from "@/components/Dashboard/RealEstate/SocialSearchChart.vue";
import RecentProperty from "@/components/Dashboard/RealEstate/RecentProperty.vue";
import CustomerReviews from "@/components/Dashboard/RealEstate/CustomerReviews.vue";
import TopProperty from "@/components/Dashboard/RealEstate/TopProperty.vue";
import LatestTransaction from "@/components/Dashboard/RealEstate/LatestTransaction.vue";

export default defineComponent({
  name: "RealEstatePage",
  components: {
    ActiveTotalProperty,
    RevenueChart,
    NewListingsSoldPropertiesChart,
    PropertiesForSaleChart,
    PropertiesForRentChart,
    NewCustomers,
    MostSalesLocation,
    RentalIncomeChart,
    SocialSearchChart,
    RecentProperty,
    CustomerReviews,
    TopProperty,
    LatestTransaction,
  },
});
</script>
