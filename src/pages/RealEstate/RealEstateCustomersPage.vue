<template>
  <PageTitle pageTitle="Customers" subTitle="Real Estate" />

  <RealEstateCustomers />
  <AddNewCustomerModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RealEstateCustomers from "@/components/Pages/RealEstate/RealEstateCustomers/index.vue";
import AddNewCustomerModal from "@/components/Pages/RealEstate/RealEstateCustomers/AddNewCustomerModal.vue";

export default defineComponent({
  name: "RealEstateCustomersPage",
  components: {
    PageTitle,
    RealEstateCustomers,
    AddNewCustomerModal,
  },
});
</script>
