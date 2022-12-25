<template>
  <a
    v-for="navLink in navLinks"
    :key="navLink.id"
    :href="navLink.location"
    class="ml-10 text-lg uppercase border-blue-800 dark:border-white hover:border-b"
    >{{ navLink.link }}</a
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
