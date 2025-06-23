<template>
  <PageTitle pageTitle="Instructors" subTitle="LMS" />

  <Instructors />
  <AddNewInstructorPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Instructors from "@/components/Pages/LMS/Instructors/index.vue";
import AddNewInstructorPopup from "@/components/Pages/LMS/Instructors/AddNewInstructorPopup.vue";

export default defineComponent({
  name: "InstructorsPage",
  components: {
    PageTitle,
    Instructors,
    AddNewInstructorPopup,
  },
});
</script>
