<template>
   <div id="app-layout" :class="[isCollapsed && 'g-sidenav-hidden']">
      <div class="min-height-300 position-absolute w-100 bg" />
      <Sidenav />
      <main class="main-content position-relative max-height-vh-100 h-100">
         <Navbar />
         <slot />
         <!-- <Footer /> -->
         <Configurator />
      </main>

   </div>
</template>

<script setup>
import BubbleChart from "~~/pagesComponents/pages/widgets/BubbleChart.vue";
import Sidenav from "~~/examples/Sidenav";
import Navbar from "~~/examples/Navbar";
import Footer from "~~/examples/Footer";
import Configurator from "~~/examples/Configurator";

import { useNavStore } from "~~/stores/NavStore";
import setTooltip from "~~/assets/js/tooltip";
import { useStore } from 'vuex'
const store = useStore();

const navStore = useNavStore();
const isCollapsed = computed(() => {
   return navStore.isSidenavCollapsed;
});

onMounted(() => {
   setTooltip(navStore.bootstrap);
   if (process.client) {
      if (window.innerWidth < 768)
         if (
            document.getElementById("app-layout").classList.add("g-sidenav-show")
         ) {
            /* empty */
         }
   }
});
useHead({
   bodyAttrs: {
      class: "bg-gray-100",
   },
});
</script>
<style scoped>
.bg {
   background-color: #f0b52b !important;
}
</style>
