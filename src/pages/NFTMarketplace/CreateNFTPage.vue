<template>
  <PageTitle pageTitle="Create NFT" subTitle="NFT" />

  <CreateNFT />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateNFT from "@/components/Pages/NFTMarketplace/CreateNFT/index.vue";

export default defineComponent({
  name: "CreateNFTPage",
  components: {
    PageTitle,
    CreateNFT,
  },
});
</script>
