<template>
  <div
    :key="project.id"
    v-for="project in projects"
    class="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-red-300"
  >
    <img
      src="../assets/logo.svg"
      alt=""
      class="rounded-xl group-hover:opacity-10"
    />
    <div
      class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div class="border-b border-black my-4">
        <h3 class="text-2xl tracking-wider text-center">
          {{ project.title }}
        </h3>
      </div>
      <p class="text-center pb-2">Vue</p>
      <p class="text-center py-2">Vite</p>
      <p class="text-center py-2">VeeValidate</p>
      <p class="text-center py-2">Tailwind</p>
      <p class="text-center py-2">VueUse</p>
      <p class="text-center py-2 pb-4">MailChimp</p>
      <RouterLink to="/">
        <p class="text-center py-3 rounded-lg dark:bg-black bg-white">
          Go to Project
        </p>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import dbData from "../db.json";

export default {
  data() {
    return { projects: dbData.projects };
  },
};
</script>
<style lang=""></style>
