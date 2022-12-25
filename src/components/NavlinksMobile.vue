<template>
  <a v-for="navLink in navLinks" :key="navLink.id" :href="navLink.location"
    ><li class="py-4 text-lg">
      <span class="border-blue-800 dark:border-white hover:border-b">{{
        navLink.link
      }}</span>
    </li></a
  >
</template>
<script>
import dbData from "../constants.json";
export default {
  data() {
    return { navLinks: dbData.navLinks };
  },
};
</script>
