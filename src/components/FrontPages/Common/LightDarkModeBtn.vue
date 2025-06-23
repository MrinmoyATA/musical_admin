<template>
  <button
    type="button"
    class="light-dark-toggle leading-none inline-block transition-all text-[#fe7a36] fixed top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] ltr:md:left-[25px] rtl:md:right-[25px] z-[9999]"
    @click="toggleTheme"
  >
    <i class="material-symbols-outlined !text-[20px] md:!text-[22px]">
      {{ icon }}
    </i>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LightDarkModeBtn",
  setup() {
    const icon = ref("light_mode");

    const toggleTheme = () => {
      const body = document.body;
      const darkThemeClass = "dark";

      if (body.classList.contains(darkThemeClass)) {
        body.classList.remove(darkThemeClass);
        icon.value = "light_mode";
        localStorage.setItem("theme", "light");
      } else {
        body.classList.add(darkThemeClass);
        icon.value = "dark_mode";
        localStorage.setItem("theme", "dark");
      }
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.value = "dark_mode";
      }
    });

    return {
      icon,
      toggleTheme,
    };
  },
});
</script>
