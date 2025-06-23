<template>
  <StatusContent />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <PerformanceOverviewChart />
    </div>
    <div class="lg:col-span-1">
      <NewMobileApp />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <HighlightsContent />

      <ChannelsContent />
    </div>
    <div class="lg:col-span-2">
      <CampaignsContent />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <ExternalLinks />

        <InstagramCampaignsChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <NewMarketingTool />
    </div>
    <div class="lg:col-span-3">
      <InstagramSubscriberChart />
    </div>
  </div>

  <CreateCampaignModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatusContent from "@/components/Dashboard/Marketing/StatusContent.vue";
import PerformanceOverviewChart from "@/components/Dashboard/Marketing/PerformanceOverviewChart.vue";
import NewMobileApp from "@/components/Dashboard/Marketing/NewMobileApp.vue";
import HighlightsContent from "@/components/Dashboard/Marketing/HighlightsContent.vue";
import ChannelsContent from "@/components/Dashboard/Marketing/ChannelsContent.vue";
import CampaignsContent from "@/components/Dashboard/Marketing/CampaignsContent.vue";
import ExternalLinks from "@/components/Dashboard/Marketing/ExternalLinks.vue";
import InstagramCampaignsChart from "@/components/Dashboard/Marketing/InstagramCampaignsChart.vue";
import NewMarketingTool from "@/components/Dashboard/Marketing/NewMarketingTool.vue";
import InstagramSubscriberChart from "@/components/Dashboard/Marketing/InstagramSubscriberChart.vue";
import CreateCampaignModal from "@/components/Dashboard/Marketing/CreateCampaignModal.vue";

export default defineComponent({
  name: "MarketingPage",
  components: {
    StatusContent,
    PerformanceOverviewChart,
    NewMobileApp,
    HighlightsContent,
    ChannelsContent,
    CampaignsContent,
    ExternalLinks,
    InstagramCampaignsChart,
    NewMarketingTool,
    InstagramSubscriberChart,
    CreateCampaignModal,
  },
});
</script>
