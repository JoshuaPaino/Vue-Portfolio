<template>
  <main class="about">
    <h1>Hello {{ $route.params.id }}</h1>
    {{ project.title }}
  </main>
</template>
<script>
import SourceData from "../constants.json";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
export default {
  computed: {
    projectId() {
      return parseInt(this.$route.params.id);
    },
    project() {
      return SourceData.projects.find(
        (project) => project.id === this.projectId
      );
    },
  },
};
</script>
