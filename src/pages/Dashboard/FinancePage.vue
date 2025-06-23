<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] gap-[25px] mb-[25px]"
  >
    <TotalIncome />
    <TotalExpenses />
    <AccountsReceivable />
    <AccountPayable />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <StatisticsChart />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <CashAtEndOfTheMonthChart />

        <WeeklyExpensesChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <IncomeSourceChart />

        <NetProfitChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <TransactionHistory />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DebitCard />
    </div>
    <div class="lg:col-span-1">
      <ExpenseBreakdownChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "@/components/Dashboard/Finance/TotalIncome.vue";
import TotalExpenses from "@/components/Dashboard/Finance/TotalExpenses.vue";
import AccountsReceivable from "@/components/Dashboard/Finance/AccountsReceivable.vue";
import AccountPayable from "@/components/Dashboard/Finance/AccountPayable.vue";
import StatisticsChart from "@/components/Dashboard/Finance/StatisticsChart.vue";
import CashAtEndOfTheMonthChart from "@/components/Dashboard/Finance/CashAtEndOfTheMonthChart.vue";
import WeeklyExpensesChart from "@/components/Dashboard/Finance/WeeklyExpensesChart.vue";
import IncomeSourceChart from "@/components/Dashboard/Finance/IncomeSourceChart.vue";
import NetProfitChart from "@/components/Dashboard/Finance/NetProfitChart.vue";
import TransactionHistory from "@/components/Dashboard/Finance/TransactionHistory.vue";
import DebitCard from "@/components/Dashboard/Finance/DebitCard.vue";
import ExpenseBreakdownChart from "@/components/Dashboard/Finance/ExpenseBreakdownChart.vue";

export default defineComponent({
  components: {
    TotalIncome,
    TotalExpenses,
    AccountsReceivable,
    AccountPayable,
    StatisticsChart,
    CashAtEndOfTheMonthChart,
    WeeklyExpensesChart,
    IncomeSourceChart,
    NetProfitChart,
    TransactionHistory,
    DebitCard,
    ExpenseBreakdownChart,
  },
});
</script>
