<template>
  <div
    :class="[
      'header-area bg-white dark:bg-[#0c1427] py-[13px] px-[20px] md:px-[25px] fixed top-0 z-[6] rounded-b-md transition-all',
      { active: stateStoreInstance.open },
    ]"
  >
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex items-center justify-center md:justify-normal">
        <div
          class="relative leading-none top-px ltr:mr-[13px] ltr:md:mr-[18px] ltr:lg:mr-[23px] rtl:ml-[13px] rtl:md:ml-[18px] rtl:lg:ml-[23px]"
        >
          <button
            type="button"
            class="hide-sidebar-toggle transition-all inline-block hover:text-primary-500"
            @click="stateStoreInstance.onChange"
          >
            <i class="material-symbols-outlined !text-[20px]"> menu </i>
          </button>
        </div>

        <SearchFrom />
      </div>
      <div
        class="flex items-center justify-center md:justify-normal mt-[13px] md:mt-0"
      >
        <div
          class="relative mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <DarkSwtichBtn />
        </div>
        <LanguageMenu />
        <div
          class="relative mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <ToggleFullscreenBtn />
        </div>
        <AdminProfile />


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "@/utils/store";

import SearchFrom from "./SearchFrom.vue";
import DarkSwtichBtn from "./DarkSwtichBtn.vue";
import LanguageMenu from "./LanguageMenu.vue";
import ToggleFullscreenBtn from "./ToggleFullscreenBtn.vue";
import AdminProfile from "./AdminProfile.vue";


export default defineComponent({
  name: "TopHeader",
  components: {
    SearchFrom,
    DarkSwtichBtn,
    LanguageMenu,
    ToggleFullscreenBtn,

    AdminProfile,
  },
  setup() {
    const stateStoreInstance = stateStore;
    const isSticky = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>
