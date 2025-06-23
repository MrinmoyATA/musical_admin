<template>
  <PageTitle pageTitle="Checkboxes & Radios" subTitle="Forms" />

  <CheckboxesRadios />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CheckboxesRadios from "@/components/Modules/Forms/CheckboxesRadios/index.vue";

export default defineComponent({
  name: "CheckboxesRadiosPage",
  components: {
    PageTitle,
    CheckboxesRadios,
  },
});
</script>
