<template>
  <div class="bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[135px]">
    <div class="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
        <div class="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] 2xl:ltr:-mr-[45px] 2xl:rtl:-ml-[45px] rounded-[25px] order-2 lg:order-1">
          <img
            src="@/assets/images/logout.jpg"
            alt="logout-image"
            class="rounded-[25px]"
          />
        </div>
        <div class="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2">
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
          <div class="my-[17px] md:my-[25px]">
            <h1 class="font-semibold text-[22px] md:text-xl lg:text-2xl mb-[5px] md:mb-[10px]">
              Welcome back to Trezo!
            </h1>
            <p class="font-medium leading-[1.5] lg:text-md text-[#445164] dark:text-gray-400">
              You Are Logged out
            </p>
          </div>
          <div class="flex items-center mb-[20px]">
            <img
              src="@/assets/images/admin.png"
              alt="admin-image"
              class="rounded-full w-[50px] border-[2px] ltr:mr-[13px] rtl:ml-[13px] border-primary-200"
            />
            <span class="font-semibold text-black dark:text-white block">
              Olivia John
            </span>
          </div>
          <RouterLink
            to="/authentication/sign-in"
            class="md:text-md block w-full text-center transition-all rounded-md font-medium py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400"
          >
            <span class="flex items-center justify-center gap-[5px]">
              <i class="material-symbols-outlined"> autorenew </i>
              Sign In
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "AdminLogoutComponent", 
  setup() {
    const router = useRouter()

    const logoutUser = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          await axios.post(
            'http://127.0.0.1:8000/api/v1/admin/logout',
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
        }

        localStorage.removeItem('token')
        router.push('/authentication/sign-in')
      } catch (error) {
        console.error('Logout failed:', error)
        router.push('/authentication/sign-in')
      }
    }

    onMounted(() => {
      logoutUser()
    })

    return {}
  }
})
</script>
