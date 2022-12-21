<script setup>
// DarkMode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// Menu Open
const [show, toggle] = useToggle();
// Click Outside

// Icons
import MaterialSymbolsMenu from "~icons/material-symbols/menu";
import IcBaselineWbSunny from "~icons/ic/baseline-wb-sunny";
import MaterialSymbolsModeNightRounded from "~icons/material-symbols/mode-night-rounded";
import IcBaselineClose from "~icons/ic/baseline-close";
import RiLinkedinFill from "~icons/ri/linkedin-fill";
import RiGithubFill from "~icons/ri/github-fill";
import RiTwitterFill from "~icons/ri/twitter-fill";
</script>
<template>
  <div
    class="fixed dark:bg-slate-800 bg-white w-full h-[120px] z-50 shadow-xl p-4"
  >
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
              <MaterialSymbolsModeNightRounded class="text-yellow-300" />
            </div>
            <div v-else><IcBaselineWbSunny /></div>
          </button>
        </ul>
      </div>
      <!-- Desktop  End -->
      <!-- Mobile Menu Start -->
      <div class="md:hidden flex">
        <MaterialSymbolsMenu style="font-size: 1.8rem" @click="toggle()" />
        <button @click="toggleDark()" class="ml-6">
          <div v-if="isDark === true">
            <MaterialSymbolsModeNightRounded
              style="font-size: 1.5rem"
              class="text-yellow-300"
            />
          </div>
          <div v-else>
            <IcBaselineWbSunny style="font-size: 1.5rem" />
          </div>
        </button>
      </div>
      <!-- Mobile Menu End -->
    </div>
    <!-- Add a Transition for this -->
    <div
      class="fixed left-0 top-0 w-full h-screen dark:bg-black/67 bg-black/90 md:hidden"
      :style="{
        visibility: show ? 'visible' : 'hidden',
      }"
    >
      <div
        class="md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen dark:bg-slate-800 bg-white p-6"
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
              class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
              @click="toggle()"
            >
              <IcBaselineClose
                style="font-size: 1.2rem"
                class="dark:text-black"
              />
            </Button>
          </div>
        </div>
        <div class="border-b border-gray-300 my-4">
          <p class="w-[85%] md:w-[90%] py-4">Let's build something together.</p>
        </div>
        <!-- Sidebar Menu -->
        <div class="py-4 flex flex-col">
          <ul class="uppercase">
            <router-link to="/"
              ><li class="py-4 text-lg">
                <span class="border-blue-800 dark:border-white hover:border-b"
                  >Home</span
                >
              </li></router-link
            >
            <router-link to="/"
              ><li class="py-4 text-lg">
                <span class="border-blue-800 dark:border-white hover:border-b"
                  >Skills</span
                >
              </li></router-link
            >
            <router-link to="/"
              ><li class="py-4 text-lg">
                <span class="border-blue-800 dark:border-white hover:border-b"
                  >Projects</span
                >
              </li></router-link
            >
            <router-link to="/"
              ><li class="py-4 text-lg">
                <span class="border-blue-800 dark:border-white hover:border-b"
                  >Contact</span
                >
              </li></router-link
            >
          </ul>
          <!-- Socials -->
          <div class="pt-20 sm:pt-40">
            <!-- Add a font color to this based on logo -->
            <p class="uppercase tracking-widest">Let's Connect</p>
            <div class="flex justify-around p-8">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
              >
                <RiLinkedinFill
                  class="dark:text-blue-800 text-blue-800 text-2xl"
                />
              </a>

              <a
                href="https://www.github.com/"
                target="_blank"
                class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
              >
                <RiGithubFill class="dark:text-black text-2xl" />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2"
              >
                <RiTwitterFill
                  class="dark:text-blue-600 text-blue-600 text-2xl"
                />
              </a>
            </div>
            <div class="flex justify-center items-center pt-20">
              <button @click="toggleDark()">
                <div v-if="isDark === true">
                  <MaterialSymbolsModeNightRounded
                    class="text-yellow-300 text-4xl"
                  />
                </div>
                <div v-else>
                  <IcBaselineWbSunny class="text-4xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <!-- Sidebar Menu -->
      </div>
    </div>
    <!-- Transition for this -->
  </div>
</template>
<!--  -->
<style>
/*  */
</style>
