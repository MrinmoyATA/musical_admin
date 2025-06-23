<template>
  <PageTitle pageTitle="Contacts" subTitle="CRM" />
  <Contacts />
  <AddNewContactPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Contacts from "@/components/Pages/CRM/Contacts/index.vue";
import AddNewContactPopup from "@/components/Pages/CRM/Contacts/AddNewContactPopup.vue";

export default defineComponent({
  name: "CRMContactsPage",
  components: {
    PageTitle,
    Contacts,
    AddNewContactPopup,
  },
});
</script>
