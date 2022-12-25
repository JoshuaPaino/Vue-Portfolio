<template>
  <Navbar />
  <main class="w-full h-screen text-center">
    <div
      class="max-w-[1240px] w-full h-full text-center mx-auto flex justify-center items-center"
    >
      <div>
        <p
          class="uppercase text-8xl text-center tracking-wide text-gray-600 dark:text-yellow-300"
        >
          404
        </p>
        <br />
        <p class="text-4xl tracking-widest">Error</p>
        <h1 class="text-4xl mt-8 font-bold">Page not found</h1>
        <h2 class="text-center text-sm mt-2 mb-8">
          Try something different or go back to the homepage.
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
        <router-link to="/">
          <button
            class="duration-100 ease-in dark:bg-blue-400 dark:animate-pulse uppercase tracking-tight p-2 border-black border rounded-full"
          >
            go back to the homepage
          </button>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
