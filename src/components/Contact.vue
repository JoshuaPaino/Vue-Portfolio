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
                src="../assets/ContactPic.jpg"
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
            <div>
              <p class="uppercase pt-8">Connect With Me</p>
              <div class="flex justify-around p-8">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <!-- right -->
        <div
          class="col-span-3 lg:col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4"
        >
          <div class="p-4">
            <form class="my-auto">
              <div
                class="hidden w-full bg-green-200 rounded-lg p-6 text-center"
              >
                <h1 class="uppercase tracking-wide dark:text-black">
                  Form has been Submitted
                </h1>
              </div>
              <div class="grid md:grid-cols-2 gap-4 w-full py-2">
                <div class="flex flex-col">
                  <label class="uppercase text-sm py-2">Name</label>
                  <input type="text" class="border-2 rounded-lg p-3 flex" />
                </div>
                <div class="flex flex-col">
                  <label class="uppercase text-sm py-2">Phone Number</label>
                  <input type="text" class="border-2 rounded-lg p-3 flex" />
                </div>
              </div>
              <div class="flex flex-col w-full py-2">
                <label class="uppercase text-sm py-2">Email</label>
                <input type="text" class="border-2 rounded-lg p-3 flex" />
              </div>
              <div class="flex flex-col w-full py-2">
                <label class="uppercase text-sm py-2">Message</label>
                <textarea
                  type="text"
                  cols="30"
                  rows="10"
                  class="border-2 rounded-lg p-3 flex"
                />
              </div>

              <button
                class="w-full bg-green-100 p-2 rounded-lg mt-6 dark:text-black"
                @click.prevent=""
              >
                Conditional Button
              </button>
            </form>
          </div>
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
