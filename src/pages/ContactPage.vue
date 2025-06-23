<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Contact Us" />
    <ContactUs />
    <CTA />
    <Footer />
    <LightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Navbar from "@/components/FrontPages/Common/Navbar.vue";
import PageTitle from "@/components/FrontPages/Common/PageTitle.vue";
import ContactUs from "@/components/FrontPages/Common/ContactUs.vue";
import CTA from "@/components/FrontPages/Common/CTA.vue";
import Footer from "@/components/FrontPages/Common/Footer.vue";
import LightDarkModeBtn from "@/components/FrontPages/Common/LightDarkModeBtn.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    Navbar,
    PageTitle,
    ContactUs,
    CTA,
    Footer,
    LightDarkModeBtn,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("padding-0");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("padding-0");
    });
  },
});
</script>
