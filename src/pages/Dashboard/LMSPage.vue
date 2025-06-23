<template>
  <div>
    <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
      <WelcomeDashboard />

      <div class="sm:grid sm:grid-cols-3 gap-[25px]">
        <TotalCourses />

        <TotalEnrolled />

        <TotalMentors />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-5 gap-[25px]">
      <div class="lg:col-span-3">
        <StudentsInterestedTopicsChart />
      </div>
      <div class="lg:col-span-2">
        <TopInstructors />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <StudentsProgress />

      <GroupLessons />

      <EnrolledByCountries />
    </div>

    <Courses />

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <CoursesSalesChart />

      <TimeSpentChart />

      <OurTopCourses />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeDashboard from "@/components/Dashboard/LMS/WelcomeDashboard.vue";
import TotalCourses from "@/components/Dashboard/LMS/TotalCourses.vue";
import TotalEnrolled from "@/components/Dashboard/LMS/TotalEnrolled.vue";
import TotalMentors from "@/components/Dashboard/LMS/TotalMentors.vue";
import StudentsInterestedTopicsChart from "@/components/Dashboard/LMS/StudentsInterestedTopicsChart.vue";
import TopInstructors from "@/components/Dashboard/LMS/TopInstructors.vue";
import StudentsProgress from "@/components/Dashboard/LMS/StudentsProgress.vue";
import GroupLessons from "@/components/Dashboard/LMS/GroupLessons.vue";
import EnrolledByCountries from "@/components/Dashboard/LMS/EnrolledByCountries.vue";
import Courses from "@/components/Dashboard/LMS/Courses.vue";
import CoursesSalesChart from "@/components/Dashboard/LMS/CoursesSalesChart.vue";
import TimeSpentChart from "@/components/Dashboard/LMS/TimeSpentChart.vue";
import OurTopCourses from "@/components/Dashboard/LMS/OurTopCourses.vue";

export default defineComponent({
  name: "LMSPage",
  components: {
    WelcomeDashboard,
    TotalCourses,
    TotalEnrolled,
    TotalMentors,
    StudentsInterestedTopicsChart,
    TopInstructors,
    StudentsProgress,
    GroupLessons,
    EnrolledByCountries,
    Courses,
    CoursesSalesChart,
    TimeSpentChart,
    OurTopCourses,
  },
});
</script>
