<template>
  <div class="flex justify-around p-8">
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
    >
      <RiLinkedinFill
        alt="Linkedin"
        class="dark:text-blue-800 text-blue-800 text-2xl"
      />
    </a>

    <a
      href="https://www.github.com/"
      target="_blank"
      class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
    >
      <RiGithubFill alt="Github" class="text-black dark:text-black text-2xl" />
    </a>

    <a
      href="https://www.twitter.com/"
      target="_blank"
      class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
    >
      <RiTwitterFill
        alt="Twitter"
        class="dark:text-blue-600 text-blue-600 text-2xl"
      />
    </a>
  </div>
</template>
<script setup>
import RiLinkedinFill from "~icons/ri/linkedin-fill";
import RiGithubFill from "~icons/ri/github-fill";
import RiTwitterFill from "~icons/ri/twitter-fill";
</script>
<style></style>
