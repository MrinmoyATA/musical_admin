<template>
  <PageTitle pageTitle="Calendar" subTitle="Apps" />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <CalendarContent />
    </div>
    <div class="lg:col-span-1">
      <WorkingSchedule />
    </div>
  </div>
  <AddEventModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CalendarContent from "@/components/Apps/Calendar/CalendarContent.vue";
import WorkingSchedule from "@/components/Apps/Calendar/WorkingSchedule.vue";
import AddEventModal from "@/components/Apps/Calendar/AddEventModal.vue";

export default defineComponent({
  name: "CalendarPage",
  components: {
    PageTitle,
    CalendarContent,
    WorkingSchedule,
    AddEventModal,
  },
});
</script>
