<template>
  <a
    v-for="socialLink in socialLinks"
    :key="socialLink.id"
    :href="socialLink.location"
    target="_blank"
    class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
  >
    <Icon
      :icon="socialLink.Icon"
      :alt="socialLink.name"
      class="text-2xl"
      :class="
        socialLink.Icon === 'ri:github-fill'
          ? 'text-black dark:text-black'
          : 'text-blue-800 dark:text-blue-800'
      "
    />
  </a>
  <a
    href="https://www.twitter.com/"
    target="_blank"
    class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
  >
    <Icon
      icon="cib:minutemailer"
      alt="Twitter"
      class="text-black dark:text-black text-2xl"
    />
  </a>
</template>
<script>
import { Icon } from "@iconify/vue";
import dbData from "../constants.json";
export default {
  data() {
    return { socialLinks: dbData.socialLinks };
  },
  components: {
    Icon,
  },
};
</script>
