<script setup>
// DarkMode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// Icons
import MaterialSymbolsMenu from "~icons/material-symbols/menu";
import IcBaselineWbSunny from "~icons/ic/baseline-wb-sunny";
import MaterialSymbolsModeNightRounded from "~icons/material-symbols/mode-night-rounded";
import IcBaselineClose from "~icons/ic/baseline-close";
</script>
<template>
  <div class="fixed w-full h-[120px] shadow-xl z-[100] p-4">
    <div class="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <img
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
        width="125"
        height="50"
      />
      <div>
        <!-- Desktop Start -->
        <ul class="hidden md:flex">
          <router-link
            to="/"
            class="ml-10 text-lg uppercase border-blue-800 dark:border-white hover:border-b"
            >Home</router-link
          >
          <router-link
            to="/"
            class="ml-10 text-lg border-blue-800 dark:border-white uppercase hover:border-b"
            >Skills</router-link
          >
          <router-link
            to="/"
            class="ml-10 text-lg border-blue-800 dark:border-white uppercase hover:border-b"
            >Projects</router-link
          >
          <router-link
            to="/"
            class="ml-10 text-lg border-blue-800 uppercase dark:border-white hover:border-b"
            >Contact</router-link
          >
          <button @click="toggleDark()" class="ml-10">
            <div v-if="isDark === true">
              <MaterialSymbolsModeNightRounded />
            </div>
            <div v-else><IcBaselineWbSunny /></div>
          </button>
        </ul>
      </div>
      <!-- Desktop  End -->
      <!-- Mobile Menu Start -->
      <div class="md:hidden flex">
        <MaterialSymbolsMenu style="font-size: 1.8rem" />
        <button @click="toggleDark()" class="ml-6">
          <div v-if="isDark === true">
            <MaterialSymbolsModeNightRounded style="font-size: 1.5rem" />
          </div>
          <div v-else><IcBaselineWbSunny style="font-size: 1.5rem" /></div>
        </button>
      </div>
      <!-- Mobile Menu End -->
    </div>
    <div
      class="fixed left-0 top-0 w-full h-screen dark:bg-black/30 bg-black/80 md:hidden"
    >
      <div
        class="md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-white p-6 ease-in duration-500"
      >
        <div class="flex w-full items-center justify-between">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            width="82"
            height="35"
          />
          <div>
            <Button
              class="rounded-full shadow-lg cursor-pointer shadow-gray-400 p-2"
            >
              <IcBaselineClose
                style="font-size: 1.2rem"
                class="dark:text-black"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--  -->
<style>
/*  */
</style>
