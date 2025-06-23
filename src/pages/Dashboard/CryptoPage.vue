<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] !pb-0 rounded-md"
  >
    <div class="trezo-card-content">
      <CryptocurrencyWatchList />

      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-2">
          <MarketPriceStatisticsChart />
        </div>
        <div class="lg:col-span-1">
          <ExchangeCoin />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <TransactionHistory />
    </div>
    <div class="lg:col-span-2">
      <Portfolio />
    </div>
  </div>

  <CryptoRankings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CryptocurrencyWatchList from "@/components/Dashboard/Crypto/CryptocurrencyWatchList.vue";
import MarketPriceStatisticsChart from "@/components/Dashboard/Crypto/MarketPriceStatisticsChart.vue";
import ExchangeCoin from "@/components/Dashboard/Crypto/ExchangeCoin.vue";
import TransactionHistory from "@/components/Dashboard/Crypto/TransactionHistory.vue";
import Portfolio from "@/components/Dashboard/Crypto/Portfolio.vue";
import CryptoRankings from "@/components/Dashboard/Crypto/CryptoRankings.vue";

export default defineComponent({
  name: "CryptoPage",
  components: {
    CryptocurrencyWatchList,
    MarketPriceStatisticsChart,
    ExchangeCoin,
    TransactionHistory,
    Portfolio,
    CryptoRankings,
  },
});
</script>
