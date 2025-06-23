<template>
  <SchoolOverview />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <Stats />
    </div>
    <div class="lg:col-span-1">
      <UpcomingEvents />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <AttendanceAnalyticsChart />
    </div>
    <div class="lg:col-span-1">
      <Teachers />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <StudentsOverviewChart />

    <NewAdmissionsChart />

    <NoticeBoard />
  </div>

  <StudentsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SchoolOverview from "@/components/Dashboard/School/SchoolOverview.vue";
import Stats from "@/components/Dashboard/School/Stats/index.vue";
import UpcomingEvents from "@/components/Dashboard/School/UpcomingEvents.vue";
import AttendanceAnalyticsChart from "@/components/Dashboard/School/AttendanceAnalyticsChart.vue";
import Teachers from "@/components/Dashboard/School/Teachers.vue";
import StudentsOverviewChart from "@/components/Dashboard/School/StudentsOverviewChart.vue";
import NewAdmissionsChart from "@/components/Dashboard/School/NewAdmissionsChart.vue";
import NoticeBoard from "@/components/Dashboard/School/NoticeBoard.vue";
import StudentsList from "@/components/Dashboard/School/StudentsList.vue";

export default defineComponent({
  name: "SchoolPage",
  components: {
    SchoolOverview,
    Stats,
    UpcomingEvents,
    AttendanceAnalyticsChart,
    Teachers,
    StudentsOverviewChart,
    NewAdmissionsChart,
    NoticeBoard,
    StudentsList,
  },
});
</script>
