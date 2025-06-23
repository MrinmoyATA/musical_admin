<template>
  <div
    class="mb-[25px] relative z-[1] pt-[20px] md:pt-[40px] lg:pt-[55px] px-[20px] md:px-[33px] rounded-md"
    id="allNFTSlides"
  >
    <ManageYourNFT />

    <NFTSlideItem />

    <div
      class="nft-swiper-button-prev absolute ltr:-left-[8px] rtl:-right-[8px] bottom-[145px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-full bg-black text-primary-200 text-center leading-[24px] md:leading-[29px] transition-all hover:bg-primary-500 text-white"
    >
      <i class="ri-arrow-left-line"></i>
    </div>
    <div
      class="nft-swiper-button-next absolute ltr:-right-[8px] rtl:-left-[8px] bottom-[145px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-full bg-black text-primary-200 text-center leading-[24px] md:leading-[29px] transition-all hover:bg-primary-500 text-white"
    >
      <i class="ri-arrow-right-line"></i>
    </div>
    <div
      class="absolute top-0 left-0 right-0 rounded-md -z-[1] h-[54%]"
      style="background: linear-gradient(92deg, #23272e 7.31%, #3f5272 97.89%)"
    ></div>
    <img
      src="@/assets/images/nfts/shape.png"
      class="absolute top-0 ltr:right-0 rtl:left-0 -z-[1]"
      alt="shape"
    />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <EthereumRate />
    </div>
    <div class="lg:col-span-2">
      <ActiveAuctions />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <FeaturedNFTArtworks />
    </div>
    <div class="lg:col-span-1">
      <NewMobileApp />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <MostPopularSellers />
    </div>
    <div class="lg:col-span-1">
      <WorldwideTopCreators />
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div class="2xl:col-span-1 md:order-1 2xl:order-1">
      <TopCollections />
    </div>
    <div class="md:col-span-2 2xl:col-span-2 md:order-3 2xl:order-2">
      <TopNFTs />
    </div>
    <div class="2xl:col-span-1 md:order-2 2xl:order-2">
      <HistoryOfBids />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ManageYourNFT from "@/components/Dashboard/NFT/ManageYourNFT.vue";
import NFTSlideItem from "@/components/Dashboard/NFT/NFTSlideItem.vue";
import EthereumRate from "@/components/Dashboard/NFT/EthereumRate/index.vue";
import ActiveAuctions from "@/components/Dashboard/NFT/ActiveAuctions.vue";
import FeaturedNFTArtworks from "@/components/Dashboard/NFT/FeaturedNFTArtworks.vue";
import NewMobileApp from "@/components/Dashboard/NFT/NewMobileApp.vue";
import MostPopularSellers from "@/components/Dashboard/NFT/MostPopularSellers.vue";
import WorldwideTopCreators from "@/components/Dashboard/NFT/WorldwideTopCreators.vue";
import TopCollections from "@/components/Dashboard/NFT/TopCollections.vue";
import TopNFTs from "@/components/Dashboard/NFT/TopNFTs.vue";
import HistoryOfBids from "@/components/Dashboard/NFT/HistoryOfBids.vue";

export default defineComponent({
  name: "NFTPage",
  components: {
    ManageYourNFT,
    NFTSlideItem,
    EthereumRate,
    ActiveAuctions,
    FeaturedNFTArtworks,
    NewMobileApp,
    MostPopularSellers,
    WorldwideTopCreators,
    TopCollections,
    TopNFTs,
    HistoryOfBids,
  },
});
</script>
