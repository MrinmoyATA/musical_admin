<template>
  <footer
    class="bg-white dark:bg-[#0c1427] rounded-t-md px-[20px] md:px-[25px] py-[15px] md:py-[20px] text-center"
  >
    <p>
      © <span class="text-purple-500">musical garage</span> Lorem ipsum dolor sit amet.
      <a
        href="#"
        target="_blank"
        class="text-primary-500 transition-all hover:underline"
      >
        Lorem, ipsum dolor.
      </a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainFooter",
});
</script>
