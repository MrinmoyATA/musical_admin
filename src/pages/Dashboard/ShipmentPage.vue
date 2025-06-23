<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
      <TotalIncome />

      <TotalShipment />

      <TotalCustomer />

      <TotalOrder />
    </div>

    <ShipmentDeliveredChart />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[25px] mb-[25px]"
      >
        <AverageDeliveryTimeChart />

        <LiveShipmentStatusChart />
      </div>

      <TrackingOrder />
    </div>
    <div class="lg:col-span-1">
      <ShipmentToTopCountries />

      <ChatContent />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <TopShippingMethodsChart />

    <TodaysShipmentsChart />

    <OnTimeDeliveryChart />
  </div>

  <ShipmentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "@/components/Dashboard/Shipment/TotalIncome.vue";
import TotalShipment from "@/components/Dashboard/Shipment/TotalShipment.vue";
import TotalCustomer from "@/components/Dashboard/Shipment/TotalCustomer.vue";
import TotalOrder from "@/components/Dashboard/Shipment/TotalOrder.vue";
import ShipmentDeliveredChart from "@/components/Dashboard/Shipment/ShipmentDeliveredChart.vue";
import AverageDeliveryTimeChart from "@/components/Dashboard/Shipment/AverageDeliveryTimeChart.vue";
import LiveShipmentStatusChart from "@/components/Dashboard/Shipment/LiveShipmentStatusChart.vue";
import TrackingOrder from "@/components/Dashboard/Shipment/TrackingOrder.vue";
import ShipmentToTopCountries from "@/components/Dashboard/Shipment/ShipmentToTopCountries.vue";
import ChatContent from "@/components/Dashboard/Shipment/ChatContent.vue";
import TopShippingMethodsChart from "@/components/Dashboard/Shipment/TopShippingMethodsChart.vue";
import TodaysShipmentsChart from "@/components/Dashboard/Shipment/TodaysShipmentsChart.vue";
import OnTimeDeliveryChart from "@/components/Dashboard/Shipment/OnTimeDeliveryChart.vue";
import ShipmentList from "@/components/Dashboard/Shipment/ShipmentList.vue";

export default defineComponent({
  name: "ShipmentPage",
  components: {
    TotalIncome,
    TotalShipment,
    TotalCustomer,
    TotalOrder,
    ShipmentDeliveredChart,
    AverageDeliveryTimeChart,
    LiveShipmentStatusChart,
    TrackingOrder,
    ShipmentToTopCountries,
    ChatContent,
    TopShippingMethodsChart,
    TodaysShipmentsChart,
    OnTimeDeliveryChart,
    ShipmentList,
  },
});
</script>
