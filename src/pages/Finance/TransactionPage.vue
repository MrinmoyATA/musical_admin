<template>
  <PageTitle pageTitle="Transaction" subTitle="Finance" />

  <Transaction />
  <AddNewTransactionModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Transaction from "@/components/Pages/Finance/Transaction/index.vue";
import AddNewTransactionModal from "@/components/Pages/Finance/Transaction/AddNewTransactionModal.vue";

export default defineComponent({
  name: "TransactionPage",
  components: {
    PageTitle,
    Transaction,
    AddNewTransactionModal,
  },
});
</script>
