<template>
  <PageTitle pageTitle="Marketplace" subTitle="NFT Marketplace" />

  <ManageYourNFT />

  <FeaturedNFTArtworks />

  <TopCreators />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ManageYourNFT from "@/components/Pages/NFTMarketplace/Marketplace/ManageYourNFT.vue";
import FeaturedNFTArtworks from "@/components/Pages/NFTMarketplace/Marketplace/FeaturedNFTArtworks.vue";
import TopCreators from "@/components/Pages/NFTMarketplace/Marketplace/TopCreators.vue";

export default defineComponent({
  name: "MarketplacePage",
  components: {
    PageTitle,
    ManageYourNFT,
    FeaturedNFTArtworks,
    TopCreators,
  },
});
</script>
