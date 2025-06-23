<template>
  <PageTitle pageTitle="Input" subTitle="Forms" />

  <InputSelect />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import InputSelect from "@/components/Modules/Forms/InputSelect/index.vue";

export default defineComponent({
  name: "InputSelectPage",
  components: {
    PageTitle,
    InputSelect,
  },
});
</script>
