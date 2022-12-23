<template>
  <div class="w-full h-screen text-center" id="home">
    <div
      class="max-w-[1240px] w-full h-full text-center mx-auto flex justify-center items-center"
    >
      <div>
        <p
          class="uppercase text-sm text-center tracking-widest text-gray-600 dark:text-yellow-300"
        >
          Let's build something together
        </p>
        <h1 class="text-4xl py-4">Hi, I'm Name</h1>
        <h2 class="text-center text-2xl mt-2 mb-4">
          <i>Web Developer </i><br />
          <!-- Missing Animations (Animista or Animate.css)<br />
          Sections links <br />
          Head <br />
          Logo <br />
          Page Name <br />
          SEO <br />
          (Vue)Page Transitions <br />
          (VeeValidate)Form <br />
          Color <br /> -->
        </h2>
        <p class="py-4 max-w-[70%] m-auto text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis,
          enim eu iaculis hendrerit, lectus mauris consequat dolor, ut
          pellentesque urna orci at magna. Maecenas tristique quam aliquet
          posuere sodales. Duis massa nunc, egestas quis bibendum sed, volutpat
          nec ex.
        </p>
        <div class="flex items-center max-w-[330px] justify-between m-auto p-8">
          <Socials />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Socials from "./Socials.vue";
</script>
