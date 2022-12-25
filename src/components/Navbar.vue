<script setup>
// DarkMode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// Menu Open
const [show, toggle] = useToggle();
// Click Outside
// Components
import Socials from "../components/Socials.vue";
import NavD from "./NavlinksDesktop.vue";
import NavM from "./NavlinksMobile.vue";
// Icons
import MaterialSymbolsMenu from "~icons/material-symbols/menu";
import IcBaselineWbSunny from "~icons/ic/baseline-wb-sunny";
import MaterialSymbolsModeNightRounded from "~icons/material-symbols/mode-night-rounded";
import IcBaselineClose from "~icons/ic/baseline-close";
import RiLinkedinFill from "~icons/ri/linkedin-fill";
import RiGithubFill from "~icons/ri/github-fill";
import RiTwitterFill from "~icons/ri/twitter-fill";
</script>
<script>
import dbData from "../constants.json";
export default {
  data() {
    return { navLinks: dbData.navLinks };
  },
};
</script>
<template>
  <nav
    class="fixed dark:bg-slate-800 bg-white w-full h-[90px] z-50 shadow-xl p-4"
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
          <NavD />
          <button @click="toggleDark()" class="ml-10">
            <div v-if="isDark === true">
              <MaterialSymbolsModeNightRounded
                alt="Dark Mode"
                class="text-yellow-300"
              />
            </div>
            <div v-else><IcBaselineWbSunny alt="Light Mode" /></div>
          </button>
        </ul>
      </div>
      <!-- Desktop  End -->
      <!-- Mobile Menu Start -->
      <div class="md:hidden flex">
        <MaterialSymbolsMenu
          style="font-size: 1.8rem"
          alt="Menu"
          @click="toggle()"
        />
        <button @click="toggleDark()" class="ml-6">
          <div v-if="isDark === true">
            <MaterialSymbolsModeNightRounded
              style="font-size: 1.5rem"
              class="text-yellow-300"
              alt="Dark Mode"
            />
          </div>
          <div v-else>
            <IcBaselineWbSunny alt="Light Mode" style="font-size: 1.5rem" />
          </div>
        </button>
      </div>
      <!-- Mobile Menu End -->
    </div>
    <!-- Add a Transition for this -->
    <div
      :class="
        show
          ? 'fixed left-0 top-0 w-full h-screen dark:bg-black/67 bg-black/90 md:hidden fade duration-300'
          : ''
      "
    >
      <div
        :class="
          show
            ? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen dark:bg-slate-800 bg-white p-6 ease-in duration-500'
            : 'fixed left-[-100%] top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen dark:bg-slate-800 bg-white p-6 duration-500'
        "
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
                alt="Menu"
                style="font-size: 1.2rem"
                class="dark:text-black text-black"
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
            <!--  -->
            <a
              @click="toggle()"
              v-for="navLink in navLinks"
              :key="navLink.id"
              :href="navLink.location"
              ><li class="py-4 text-lg">
                <span
                  class="border-blue-800 dark:border-white hover:border-b"
                  >{{ navLink.link }}</span
                >
              </li></a
            >
            <!--  -->
          </ul>
          <!-- Socials -->
          <div class="pt-20 sm:pt-40">
            <!-- Add a font color to this based on logo -->
            <p class="uppercase tracking-widest">Let's Connect</p>
            <div class="flex justify-around p-8">
              <Socials />
            </div>

            <div class="flex justify-center items-center pt-20">
              <button @click="toggleDark()">
                <div v-if="isDark === true">
                  <MaterialSymbolsModeNightRounded
                    class="text-yellow-300 text-4xl"
                    alt="Dark Mode"
                  />
                </div>
                <div v-else>
                  <IcBaselineWbSunny alt="Light Mode" class="text-4xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <!-- Sidebar Menu -->
      </div>
    </div>
    <!-- Transition for this -->
  </nav>
</template>
