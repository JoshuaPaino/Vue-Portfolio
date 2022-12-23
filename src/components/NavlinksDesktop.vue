<template>
  <router-link
    v-for="navLink in navLinks"
    :key="navLink.id"
    :to="navLink.location"
    class="ml-10 text-lg uppercase border-blue-800 dark:border-white hover:border-b"
    >{{ navLink.link }}</router-link
  >
</template>
<script>
import dbData from "../db.json";

export default {
  data() {
    return { navLinks: dbData.navLinks };
  },
};
</script>
