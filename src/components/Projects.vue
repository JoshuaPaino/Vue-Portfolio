<template>
  <div id="projects" class="w-full lg:h-full p-2">
    <SpacerVue />
    <div class="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <p class="text-xl tracking-widest uppercase">Projects</p>
      <h2 class="py-4 text-2xl font-bold">What I've Built</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectList />
      </div>
    </div>
  </div>
</template>

<script setup>
import SpacerVue from "./Spacer.vue";
import ProjectList from "./ProjectList.vue";
</script>
