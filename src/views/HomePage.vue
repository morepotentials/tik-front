<template>
  <div class="relative">
    <div class="fixed z-10">
      <div
        class="hidden md:flex mt-5 ml-5 justify-center flex-col items-center cursor-pointer"
      >
        <a href="https://industriekultur-sachsen-anhalt.de">
          <TikLogoN class="mb-5 h-[75px] mb-5 lg:h-[150px]"></TikLogoN>
        </a>
        <a
          href="https://kultur.sachsen-anhalt.de/kultur-entdecken/kulturland-entdecken/industriekultur#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/lsa_logo_farbig.png"
            class="max-h-[25px] lg:max-h-[50px]"
          />
        </a>
        <a
          href="https://moderndenken.sachsen-anhalt.de/moderne-denker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/moderndenken_logo_weiss.png"
            class="max-h-[25px] lg:max-h-[50px]"
          />
        </a>
        <a
          href="https://www.ferropolis.de/de/cms/_redaktionell/28/Industriekultur.html"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5"
        >
          <img
            src="../assets/nik_logo_weiss.png"
            class="max-h-[15px] lg:max-h-[28px]"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="relative">
    <TourismusRegionen @click-on-region="hideFooter" />
    <div
      v-if="!isProgramOpen"
      id="footer"
      class="absolute bottom-5 left-5 text-white"
    >
      <router-link to="/datenschutz" class="text-white hover:text-t-green"
        >Datenschutz</router-link
      >
      |
      <router-link to="/impressum" class="text-white hover:text-t-green"
        >Impressum</router-link
      >
    </div>
  </div>
</template>

<script>
import TourismusRegionen from "../components/TourismusRegionen.vue";
import TikLogoN from "../components/TikLogoN.vue";
import { ref } from "vue";

export default {
  name: "HomePage",
  components: {
    TourismusRegionen,
    TikLogoN,
  },

  setup() {
    const isProgramOpen = ref(false);
    const hideFooter = (programOpen) => {
      console.log("hello");
      isProgramOpen.value = programOpen;
    };
    return {
      hideFooter,
      isProgramOpen,
    };
  },
};
</script>
