<template>
  <div class="w-full lg:h-screen p-2 py-16">
    <div class="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <p class="text-xl tracking-widest uppercase">Projects</p>
      <h2 class="py-4 text-2xl font-bold">What I've Built</h2>
      <!--  -->
      <div class="grid md:grid-cols-2 gap-8">
        <!--  -->
        <div
          class="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-red-300"
        >
          <img
            src="../assets/logo.svg"
            alt=""
            class="rounded-xl group-hover:opacity-10"
          />
          <div
            class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <h3 class="text-2xl tracking-wider text-center">Project Name</h3>
            <p class="text-center pb-4 pt-2">Vue</p>
            <RouterLink to="/">
              <p class="text-center py-3 rounded-lg bg-blue-300">
                Go to Project
              </p>
            </RouterLink>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div
          class="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-red-300"
        >
          <img
            src="../assets/logo.svg"
            alt=""
            class="rounded-xl group-hover:opacity-10"
          />
          <div
            class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <h3 class="text-2xl tracking-wider text-center">Project Name</h3>
            <p class="text-center pb-4 pt-2">Vue</p>
            <RouterLink to="/">
              <p class="text-center py-3 rounded-lg bg-blue-300">
                Go to Project
              </p>
            </RouterLink>
          </div>
        </div>
        <!--  -->
      </div>

      <!--  -->
    </div>
  </div>
</template>
<script setup></script>
<style></style>
