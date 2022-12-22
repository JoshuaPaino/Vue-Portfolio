<template>
  <div class="w-full lg:h-screen">
    <div class="max-w-[1240px] m-auto px-2 py-16 w-full">
      <p class="text-xl tracking-widest">Contact</p>
      <h2 class="py-4 text-2xl font-bold">Get In Touch</h2>
      <div class="grid md:grid-cols-5 gap-8">
        <!-- left -->
        <div
          class="col-span-2 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4"
        >
          <div class="md:p-4 h-full">
            <div>
              <img
                src="../assets/logo.svg"
                class="rounded-xl hover:scale-105 ease-in duration-300"
              />
              <h2 class="py-2">Name</h2>
              <p>Developer</p>
              <p class="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                iaculis, enim eu iaculis hendrerit, lectus mauris consequat
                dolor, ut pellentesque urna orci at magna. Maecenas tristique
                quam aliquet posuere sodales. Duis massa nunc, egestas quis
                bibendum sed, volutpat nec ex.
              </p>
            </div>
            <!-- Social -->
            <div>
              <p class="uppercase pt-8">Connect With Me</p>
              <!--  -->
              <Socials />
              <!--  -->
            </div>
          </div>
        </div>
        <!-- right -->
        <div
          class="col-span-3 lg:col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4"
        >
          <div class="p-4">Vee-Validate-Form</div>
        </div>
      </div>
    </div>
    <ScrollTop />
  </div>
</template>
<script setup>
import Socials from "../components/Socials.vue";
import ScrollTop from "../components/ScrollTop.vue";
</script>
<style></style>
