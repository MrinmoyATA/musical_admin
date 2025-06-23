<template>
  <div
    :class="[
      'fixed top-0 right-0 left-0 transition-all h-auto z-[5] py-[20px]',
      { 'is-sticky': isSticky },
    ]"
    id="navbar"
  >
    <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
      <div
        class="flex items-center relative flex-wrap lg:flex-nowrap justify-between lg:justify-start"
      >
        <RouterLink
          to="/"
          class="inline-block max-w-[130px] ltr:mr-[15px] rtl:ml-[15px]"
        >
          <img
            src="@/assets/images/logo-big.svg"
            alt="logo"
            class="inline-block dark:hidden"
          />
          <img
            src="@/assets/images/white-logo-big.svg"
            alt="logo"
            class="hidden dark:inline-block"
          />
        </RouterLink>
        <button
          type="button"
          class="inline-block relative leading-none lg:hidden"
          :class="['navbar-toggler', { active: stateStoreInstance.active }]"
          @click="stateStoreInstance.activeBtn"
        >
          <span
            class="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"
          ></span>
          <span
            class="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"
          ></span>
          <span
            class="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"
          ></span>
        </button>

        <div class="hidden lg:flex items-center grow basis-full basis-auto">
          <!-- For Big Devices -->
          <ul
            class="flex ltr:ml-[30px] rtl:mr-[30px] ltr:xl:ml-[55px] rtl:xl:mr-[55px] flex-row gap-[30px] xl:gap-[50px]"
          >
            <li>
              <RouterLink
                to="/"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/features"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                Features
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/team"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                Our Team
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/faq"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                FAQ's
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                Contact
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/dashboard"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600 text-[15px] xl:text-md"
              >
                Admin
              </RouterLink>
            </li>
          </ul>
          <div class="flex items-center ltr:ml-auto rtl:mr-auto gap-[15px]">
            <RouterLink
              to="/authentication/sign-in"
              class="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500"
            >
              <span
                class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]"
                >
                  login
                </i>
                Login
              </span>
            </RouterLink>
            <RouterLink
              to="/authentication/sign-up"
              class="inline-block lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] bg-purple-600 text-white rounded-md transition-all font-medium border border-purple-600 hover:bg-purple-500 hover:border-purple-500"
            >
              <span
                class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]"
                >
                  person
                </i>
                Register
              </span>
            </RouterLink>
          </div>
        </div>
        <div
          :class="[
            'bg-white dark:bg-black mt-[20px] p-[20px] md:p-[30px] w-full hidden lg:!hidden',
            { show: stateStoreInstance.active },
          ]"
        >
          <!-- For Resposive -->
          <ul>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/"
                class="font-medium text-primary-600 dark:text-primary-600 transition-all hover:text-primary-600"
              >
                Home
              </RouterLink>
            </li>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/features"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Features
              </RouterLink>
            </li>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/team"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Our Team
              </RouterLink>
            </li>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/faq"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                FAQ's
              </RouterLink>
            </li>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/contact"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Contact
              </RouterLink>
            </li>
            <li class="my-[14px] md:my-[16px] first:mt-0 last:mb-0">
              <RouterLink
                to="/dashboard"
                class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Admin
              </RouterLink>
            </li>
          </ul>
          <div class="flex items-center gap-[15px] mt-[14px] md:mt-[16px]">
            <RouterLink
              to="/authentication/sign-in"
              class="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500"
            >
              <span
                class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]"
                >
                  login
                </i>
                Login
              </span>
            </RouterLink>
            <RouterLink
              to="/authentication/sign-up"
              class="inline-block lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] bg-purple-600 text-white rounded-md transition-all font-medium border border-purple-600 hover:bg-purple-500 hover:border-purple-500"
            >
              <span
                class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]"
                >
                  person
                </i>
                Register
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  setup() {
    const isSticky = ref(false);
    const stateStoreInstance = stateStore;

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

<style lang="scss" scoped>
ul {
  li {
    a {
      &.active {
        @apply text-primary-600;
      }
    }
  }
}
</style>
