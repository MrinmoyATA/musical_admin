<template>
  <WelcomeBack />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <TotalEmployees />

    <ResignedEmployees />

    <NewEmployees />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <EmployeeAttendanceTrendsChart />
    </div>
    <div class="lg:col-span-1">
      <EmployeeWorkFormatChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <EmployeeSalaryChart />
    </div>
    <div class="lg:col-span-2">
      <EmployeeLeaveRequest />
    </div>
  </div>

  <EmployeeList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBack from "@/components/Dashboard/HRM/WelcomeBack.vue";
import TotalEmployees from "@/components/Dashboard/HRM/TotalEmployees.vue";
import ResignedEmployees from "@/components/Dashboard/HRM/ResignedEmployees.vue";
import NewEmployees from "@/components/Dashboard/HRM/NewEmployees.vue";
import EmployeeAttendanceTrendsChart from "@/components/Dashboard/HRM/EmployeeAttendanceTrendsChart.vue";
import EmployeeWorkFormatChart from "@/components/Dashboard/HRM/EmployeeWorkFormatChart.vue";
import EmployeeSalaryChart from "@/components/Dashboard/HRM/EmployeeSalaryChart.vue";
import EmployeeLeaveRequest from "@/components/Dashboard/HRM/EmployeeLeaveRequest.vue";
import EmployeeList from "@/components/Dashboard/HRM/EmployeeList.vue";

export default defineComponent({
  name: "HRMPage",
  components: {
    WelcomeBack,
    TotalEmployees,
    ResignedEmployees,
    NewEmployees,
    EmployeeAttendanceTrendsChart,
    EmployeeWorkFormatChart,
    EmployeeSalaryChart,
    EmployeeLeaveRequest,
    EmployeeList,
  },
});
</script>
