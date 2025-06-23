<template>
  <div>
    <!-- <Preloader v-if="isLoading" /> -->
    <LeftSidebar v-if="shouldShowSidebar && !isNotFound" />
    <TopHeader v-if="shouldShowHeader && !isNotFound" />

    <div
      :class="[
        'main-content transition-all flex flex-col overflow-hidden min-h-screen',
        {
          active: stateStoreInstance.open,
          'padding-minus': shouldShowPaddingZero || isNotFound,
        },
      ]"
    >
      <router-view />
      <div class="grow"></div>
      <MainFooter v-if="shouldShowFooter && !isNotFound" />
    </div>
    <AddNewTaskPopup />
    <AddNewCardPopup />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watchEffect,
  computed,
  watch,
} from "vue";
import stateStore from "@/utils/store";
import { useRoute } from "vue-router";
const direction = ref("ltr");

// import Preloader from "./components/Layouts/Preloader.vue";
import LeftSidebar from "./components/Layouts/LeftSidebar.vue";
import TopHeader from "./components/Layouts/TopHeader/index.vue";
import MainFooter from "./components/Layouts/MainFooter.vue";
import AddNewTaskPopup from "./components/Layouts/AddNewTaskPopup.vue";
import AddNewCardPopup from "./components/Layouts/AddNewCardPopup.vue";
// import AddNewCardModal from "./components/Layouts/AddNewCardModal.vue";
// import AddNewFileModal from "./components/Layouts/AddNewFileModal.vue";
// import AddNewOrderModal from "./components/Layouts/AddNewOrderModal.vue";
// import AddNewCategorieModal from "./components/Layouts/AddNewCategorieModal.vue";
// import AddNewContactModal from "./components/Layouts/AddNewContactModal.vue";
// import AddNewCustomerModal from "./components/Layouts/AddNewCustomerModal.vue";
// import AddNewLeadModal from "./components/Layouts/AddNewLeadModal.vue";
// import AddNewDealsModal from "./components/Layouts/AddNewDealsModal.vue";
// import AddNewUserModal from "./components/Layouts/AddNewUserModal.vue";
// import AddNewInstructorsModal from "./components/Layouts/AddNewInstructorsModal.vue";
// import SettingsSidebar from "./components/Layouts/SettingsSidebar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    // Preloader,
    LeftSidebar,
    TopHeader,
    MainFooter,
    AddNewTaskPopup,
    AddNewCardPopup,
    // AddNewCardModal,
    // AddNewFileModal,
    // AddNewOrderModal,
    // AddNewCategorieModal,
    // AddNewContactModal,
    // AddNewCustomerModal,
    // AddNewLeadModal,
    // AddNewDealsModal,
    // AddNewUserModal,
    // AddNewInstructorsModal,
    // SettingsSidebar,
  },
  setup() {
    const stateStoreInstance = stateStore;
    // const isLoading = ref(true);
    const route = useRoute();

    const hiddenRoutes = [
      "/",
      "/features",
      "/team",
      "/faq",
      "/contact",
      "/authentication/sign-in",
      "/authentication/sign-up",
      "/authentication/forgot-password",
      "/authentication/reset-password",
      "/authentication/confirm-email",
      "/authentication/lock-screen",
      "/authentication/logout",
      "/extra-pages/coming-soon",
    ];

    const shouldShowSidebar = computed(
      () => !hiddenRoutes.includes(route.path)
    );
    const shouldShowPaddingZero = computed(() =>
      hiddenRoutes.includes(route.path)
    );
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowDiv = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));

    // Handle wildcard path for 404-like routes
    const isNotFound = computed(() =>
      route.matched.some((record) => record.path === "/:pathMatch(.*)*")
    );

    onMounted(() => {
      // setTimeout(() => {
      //   isLoading.value = false;
      // }, 1000);

      watchEffect(() => {
        if (stateStore.open) {
          document.body.classList.remove("sidebar-show");
          document.body.classList.add("sidebar-hide");
        } else {
          document.body.classList.remove("sidebar-hide");
          document.body.classList.add("sidebar-show");
        }
      });
    });

    watch(
      direction,
      (newDirection) => {
        document.body.setAttribute("dir", newDirection);
      },
      { immediate: true }
    );

    return {
      // isLoading,
      shouldShowSidebar,
      shouldShowPaddingZero,
      shouldShowHeader,
      shouldShowDiv,
      shouldShowFooter,
      isNotFound,
      stateStoreInstance,
    };
  },
});
</script>
