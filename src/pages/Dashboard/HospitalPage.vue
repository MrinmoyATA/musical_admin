<template>
  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <YourScheduleToday />

      <div class="sm:grid sm:grid-cols-2 gap-[25px]">
        <OverallVisitorsChart />
        <PatientsChart />
      </div>
    </div>
    <div class="lg:col-span-3">
      <PatientAdmissionsDischargesChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <EmergencyRoomVisitsChart />
    </div>
    <div class="lg:col-span-3">
      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-1">
          <CriticalPatientsChart />
        </div>
        <div class="lg:col-span-2">
          <BedOccupancyRateChart />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <PatientAppointments />
    </div>
    <div class="lg:col-span-1">
      <ScheduleAppointment />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <PatientByAgeChart />
    </div>
    <div class="lg:col-span-2">
      <HospitalEarnings />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YourScheduleToday from "@/components/Dashboard/Hospital/YourScheduleToday.vue";
import OverallVisitorsChart from "@/components/Dashboard/Hospital/OverallVisitorsChart.vue";
import PatientsChart from "@/components/Dashboard/Hospital/PatientsChart.vue";
import PatientAdmissionsDischargesChart from "@/components/Dashboard/Hospital/PatientAdmissionsDischargesChart.vue";
import EmergencyRoomVisitsChart from "@/components/Dashboard/Hospital/EmergencyRoomVisitsChart.vue";
import CriticalPatientsChart from "@/components/Dashboard/Hospital/CriticalPatientsChart.vue";
import BedOccupancyRateChart from "@/components/Dashboard/Hospital/BedOccupancyRateChart.vue";
import PatientAppointments from "@/components/Dashboard/Hospital/PatientAppointments.vue";
import ScheduleAppointment from "@/components/Dashboard/Hospital/ScheduleAppointment.vue";
import PatientByAgeChart from "@/components/Dashboard/Hospital/PatientByAgeChart.vue";
import HospitalEarnings from "@/components/Dashboard/Hospital/HospitalEarnings.vue";

export default defineComponent({
  name: "HospitalPage",
  components: {
    YourScheduleToday,
    OverallVisitorsChart,
    PatientsChart,
    PatientAdmissionsDischargesChart,
    EmergencyRoomVisitsChart,
    CriticalPatientsChart,
    BedOccupancyRateChart,
    PatientAppointments,
    ScheduleAppointment,
    PatientByAgeChart,
    HospitalEarnings,
  },
});
</script>
