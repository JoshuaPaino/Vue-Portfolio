<template>
  <div
    :key="sk.id"
    v-for="sk in skills"
    class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
  >
    <div class="grid grid-cols-2 gap-4 justify-center items-center">
      <div class="m-auto">
        <Icon
          :icon="sk.Icon"
          height="64px"
          width="64px"
          :class="sk.Icon === 'logos:github-icon' ? 'dark:fill-white' : ''"
        />
      </div>
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-2xl uppercase">{{ sk.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import dbData from "../constants.json";

export default {
  data() {
    return { skills: dbData.skills };
  },
  components: {
    Icon,
  },
};
</script>
