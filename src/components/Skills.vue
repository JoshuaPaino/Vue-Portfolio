<template>
  <div id="skills" class="w-full lg:h-full p-2">
    <SpacerVue />
    <div class="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <p class="text-xl tracking-widest uppercase">Skills</p>

      <h2 class="py-4 text-2xl font-bold">What I Can do</h2>
      <!--  -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Skill />
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script setup>
import SpacerVue from "./Spacer.vue";
// import Skill
import Skill from "./Skill.vue";
</script>
