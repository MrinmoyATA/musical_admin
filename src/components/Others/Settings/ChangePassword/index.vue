<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">

      <form>
        <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
          <div class="mb-[20px] sm:mb-0 relative" id="passwordHideShow">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Old Password
            </label>
            <input
              type="password"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              id="password"
              placeholder="Type password"
            />
            <button
              class="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[13px] transition-all hover:text-primary-500"
              id="toggleButton"
              type="button"
            >
              <i class="ri-eye-off-line"></i>
            </button>
          </div>
          <div class="mb-[20px] sm:mb-0 relative" id="passwordHideShow2">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              New Password
            </label>
            <input
              type="password"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              id="password2"
              placeholder="Type password"
            />
            <button
              class="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[13px] transition-all hover:text-primary-500"
              id="toggleButton2"
              type="button"
            >
              <i class="ri-eye-off-line"></i>
            </button>
          </div>
          <div
            class="sm:col-span-2 mb-[20px] sm:mb-0 relative"
            id="passwordHideShow3"
          >
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Confirm Password
            </label>
            <input
              type="password"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              id="password3"
              placeholder="Type password"
            />
            <button
              class="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[13px] transition-all hover:text-primary-500"
              id="toggleButton3"
              type="button"
            >
              <i class="ri-eye-off-line"></i>
            </button>
          </div>
        </div>
        <div class="mt-[20px] md:mt-[25px]">
          <button
            type="button"
            class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
          >
            <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
              <i
                class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
              >
                check
              </i>
              Change Password
            </span>
          </button>
          <a
            href="forgot-password.html"
            class="inline-block text-danger-500 ltr:ml-[23px] rtl:mr-[23px]"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangePassword",
  components: {
    
  },
});
</script>
