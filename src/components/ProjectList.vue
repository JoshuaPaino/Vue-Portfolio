<template>
  <div
    :key="project.id"
    v-for="project in projects"
    class="relative flex items-center justify-center p-4 h-auto w-full shadow-xl rounded-xl group hover:bg-red-300"
  >
    <img
      :src="project.source"
      alt=""
      class="rounded-xl group-hover:opacity-10"
    />
    <div
      class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div class="border-b border-black my-4">
        <h3 class="text-2xl tracking-wider text-center uppercase">
          {{ project.fw }} - {{ project.title }}
        </h3>
      </div>
      <p class="text-center pb-4">
        {{ project.description }}
      </p>
      <RouterLink :to="{ name: 'project.show', params: { id: project.id } }">
        <p class="text-center py-3 rounded-lg dark:bg-black bg-white">
          Go to Project
        </p>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import dbData from "../constants.json";
export default {
  data() {
    return { projects: dbData.projects };
  },
};
</script>
