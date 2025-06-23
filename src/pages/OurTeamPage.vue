<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Our Team" />
    <div class="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px]">
      <OurTeam />
    </div>
    <CTA />
    <Footer />
    <LightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/FrontPages/Common/Navbar.vue";
import PageTitle from "@/components/FrontPages/Common/PageTitle.vue";
import OurTeam from "@/components/FrontPages/Common/OurTeam.vue";
import CTA from "@/components/FrontPages/Common/CTA.vue";
import Footer from "@/components/FrontPages/Common/Footer.vue";
import LightDarkModeBtn from "@/components/FrontPages/Common/LightDarkModeBtn.vue";

export default defineComponent({
  name: "OurTeamPage",
  components: {
    Navbar,
    PageTitle,
    OurTeam,
    CTA,
    Footer,
    LightDarkModeBtn,
  },
});
</script>
