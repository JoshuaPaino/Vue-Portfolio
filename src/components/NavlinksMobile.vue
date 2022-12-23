<template>
  <router-link
    v-for="navLink in navLinks"
    :key="navLink.id"
    :to="navLink.location"
    ><li class="py-4 text-lg">
      <span class="border-blue-800 dark:border-white hover:border-b">{{
        navLink.link
      }}</span>
    </li></router-link
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
