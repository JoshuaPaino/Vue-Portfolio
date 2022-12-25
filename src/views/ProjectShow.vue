<template>
  <main class="about">
    <h1>Hello {{ $route.params.id }}</h1>
    {{ project.title }}
  </main>
</template>
<script>
import SourceData from "../constants.json";
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
