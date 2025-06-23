<template>
  <PageTitle pageTitle="Course Details" subTitle="LMS" />

  <CourseDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CourseDetails from "@/components/Pages/LMS/CourseDetails/index.vue";

export default defineComponent({
  name: "CourseDetailsPage",
  components: {
    PageTitle,
    CourseDetails,
  },
});
</script>
