<template>
  <div class="xl:grid xl:grid-cols-3 gap-[25px]">
    <div class="xl:col-span-2">
      <AnalyticsOverviewChart />

      <!-- Analytics Stats -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md relative"
      >
        <div class="trezo-card-content">
          <div class="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
            <WebsiteVisitsChart />

            <NewRegistersChart />
          </div>
        </div>

        <div
          class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <img src="@/assets/images/spring-fat.png" alt="spring-fat" />
        </div>
      </div>
    </div>

    <div class="xl:col-span-1">
      <RealtimeActiveUsersChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <BrowserUsedByUsers />
    </div>
    <div class="lg:col-span-2">
      <DeviceSessionsChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <ClicksChart />

    <ImpressionsChart />

    <SessionsChart />
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <SessionsByChannelChart />
    </div>
    <div class="lg:col-span-3">
      <ClicksImpressionsByKeywords />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <TopBrowsingPagesToday />
    </div>
    <div class="lg:col-span-1">
      <UsersByCountry />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnalyticsOverviewChart from "@/components/Dashboard/Analytics/AnalyticsOverviewChart.vue";
import WebsiteVisitsChart from "@/components/Dashboard/Analytics/WebsiteVisitsChart.vue";
import NewRegistersChart from "@/components/Dashboard/Analytics/NewRegistersChart.vue";
import RealtimeActiveUsersChart from "@/components/Dashboard/Analytics/RealtimeActiveUsersChart.vue";
import BrowserUsedByUsers from "@/components/Dashboard/Analytics/BrowserUsedByUsers.vue";
import DeviceSessionsChart from "@/components/Dashboard/Analytics/DeviceSessionsChart.vue";
import ClicksChart from "@/components/Dashboard/Analytics/ClicksChart.vue";
import ImpressionsChart from "@/components/Dashboard/Analytics/ImpressionsChart.vue";
import SessionsChart from "@/components/Dashboard/Analytics/SessionsChart.vue";
import SessionsByChannelChart from "@/components/Dashboard/Analytics/SessionsByChannelChart.vue";
import ClicksImpressionsByKeywords from "@/components/Dashboard/Analytics/ClicksImpressionsByKeywords.vue";
import TopBrowsingPagesToday from "@/components/Dashboard/Analytics/TopBrowsingPagesToday.vue";
import UsersByCountry from "@/components/Dashboard/Analytics/UsersByCountry.vue";

export default defineComponent({
  name: "AnalyticsPage",
  components: {
    AnalyticsOverviewChart,
    WebsiteVisitsChart,
    NewRegistersChart,
    RealtimeActiveUsersChart,
    BrowserUsedByUsers,
    DeviceSessionsChart,
    ClicksChart,
    ImpressionsChart,
    SessionsChart,
    SessionsByChannelChart,
    ClicksImpressionsByKeywords,
    TopBrowsingPagesToday,
    UsersByCountry,
  },
});
</script>
