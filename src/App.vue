<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Header -->
  <RouterView />
  <!-- Footer -->
</template>

<style>
html.dark {
  color-scheme: dark;
}
body {
  @apply bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-white;
}
</style>
