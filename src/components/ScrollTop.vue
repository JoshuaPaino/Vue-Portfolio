<template>
  <div class="flex mb-4 w-full items-center justify-center">
    <div
      class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2 lg:mb-10"
      @click="scrollToTop()"
      alt="Back To Top"
    >
      <CharmChevronsUp class="text-2xl lg:text-5xl dark:text-black" />
    </div>
  </div>
</template>
<script setup>
import CharmChevronsUp from "~icons/charm/chevrons-up";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
