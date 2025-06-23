<template>
  <div class="bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[135px]">
    <div class="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
        <div class="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] 2xl:ltr:-mr-[45px] 2xl:rtl:-ml-[45px] rounded-[25px] order-2 lg:order-1">
          <img src="@/assets/images/sign-in.jpg" alt="sign-in-image" class="rounded-[25px]" />
        </div>
        <div class="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2">
          <img src="#" alt="logo" class="inline-block dark:hidden" />
          <img src="#" alt="logo" class="hidden dark:inline-block" />

          <div class="my-[17px] md:my-[25px]">
            <h1 class="font-semibold text-[22px] md:text-xl lg:text-2xl mb-[5px] md:mb-[7px]">
              Welcome back to musical garage!
            </h1>
          </div>

          <!-- Email Input -->
          <div class="mb-[15px] relative">
            <label class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
              Email Address
            </label>
            <input
              v-model="email"
              type="email"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="example@gmail.com"
            />
            <span class="text-red-500 text-sm mt-1 block" v-if="validationError.email">
              {{ validationError.email }}
            </span>
          </div>

          <div class="mb-[15px] relative" id="passwordHideShow">
            <label class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
              Password
            </label>
            <input
              v-model="password"
              type="password"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              id="password"
              placeholder="Type password"
            />
            <button
              class="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[12px] transition-all hover:text-primary-500"
              id="toggleButton"
              type="button"
            >
              <i class="ri-eye-off-line"></i>
            </button>
            <span class="py-[1rem] px-[1rem] text-danger-500 bg-danger-50 border border-danger-200 rounded-md" v-if="validationError.password">
              {{ validationError.password }}
            </span>
          </div>

          <RouterLink
            to="/authentication/forgot-password"
            class="inline-block text-primary-500 transition-all font-semibold hover:underline"
          >
            Forgot Password?
          </RouterLink>

          <button
            @click.prevent="handleLogin"
            type="submit"
            class="md:text-md block w-full text-center transition-all rounded-md font-medium mt-[20px] md:mt-[25px] py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400"
          >
            <span class="flex items-center justify-center gap-[5px]">
              <i class="material-symbols-outlined"> login </i>
              Sign In
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"

export default defineComponent({
  name: "SignIn",

  data() {
    return {
      email: "",
      password: "",
      validationError: {
        email: "",
        password: "",
      },
    }
  },

  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    return { router, authStore }
  },

  methods: {
    async handleLogin() {
      this.validationError.email = ""
      this.validationError.password = ""

      try {
        await this.authStore.login({
          email: this.email,
          password: this.password,
        })

        if (this.authStore.user?.role === "admin") {
          this.router.push("/dashboard")
        } else {
          this.router.push("/")
        }
      } catch (error: any) {
        if (error.response?.status === 422 && error.response.data.errors) {
          this.validationError.email =
            error.response.data.errors.email?.[0] || ""
          this.validationError.password =
            error.response.data.errors.password?.[0] || ""
        } else {
          this.validationError.email = "Invalid email or password"
        }
      }
    },
  },
})
</script>
