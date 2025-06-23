<template>
  <div>
    <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
      <ProjectsOverview />

      <ProjectsRoadmapChart />
    </div>

    <div class="lg:grid lg:grid-cols-5 gap-[25px]">
      <div class="lg:col-span-3">
        <ProjectsProgressChart />
      </div>
      <div class="lg:col-span-2">
        <MyTasks />
      </div>
    </div>

    <AllProjects />

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <ProjectsAnalysisChart />

      <TeamMembers />

      <WorkingSchedule />
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <ToDoList />
      </div>
      <div class="lg:col-span-1">
        <TasksOverviewChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsOverview from "@/components/Dashboard/ProjectManagement/ProjectsOverview.vue";
import ProjectsRoadmapChart from "@/components/Dashboard/ProjectManagement/ProjectsRoadmapChart.vue";
import ProjectsProgressChart from "@/components/Dashboard/ProjectManagement/ProjectsProgressChart.vue";
import MyTasks from "@/components/Dashboard/ProjectManagement/MyTasks.vue";
import AllProjects from "@/components/Dashboard/ProjectManagement/AllProjects.vue";
import ProjectsAnalysisChart from "@/components/Dashboard/ProjectManagement/ProjectsAnalysisChart.vue";
import TeamMembers from "@/components/Dashboard/ProjectManagement/TeamMembers.vue";
import WorkingSchedule from "@/components/Dashboard/ProjectManagement/WorkingSchedule.vue";
import ToDoList from "@/components/Dashboard/ProjectManagement/ToDoList.vue";
import TasksOverviewChart from "@/components/Dashboard/ProjectManagement/TasksOverviewChart.vue";

export default defineComponent({
  name: "ProjectManagementPage",
  components: {
    ProjectsOverview,
    ProjectsRoadmapChart,
    ProjectsProgressChart,
    MyTasks,
    AllProjects,
    ProjectsAnalysisChart,
    TeamMembers,
    WorkingSchedule,
    ToDoList,
    TasksOverviewChart,
  },
});
</script>
