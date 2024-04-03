<template>
  <div class="relative">
    <div class="fixed z-10">
      <div
        class="hidden md:flex mt-5 ml-5 justify-center flex-col items-center cursor-pointer"
      >
        <TikLogoN class="mb-5 h-[150px]"></TikLogoN>
        <a
          href="https://kultur.sachsen-anhalt.de/kultur-entdecken/kulturland-entdecken/industriekultur#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/lsa_logo_weiss.png"
            style="max-height: 50px"
            href=""
          />
        </a>
        <a
          href="https://moderndenken.sachsen-anhalt.de/moderne-denker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/moderndenken_logo_weiss.png"
            style="max-height: 50px"
          />
        </a>
        <a
          href="https://www.ferropolis.de/de/cms/_redaktionell/28/Industriekultur.html"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5"
        >
          <img src="./assets/nik_logo_weiss.png" style="max-height: 28px" />
        </a>
      </div>
      <!-- <h2 class="text-center text-2xl text-t-green m-auto p-l-4">
        Regionales Programm
      </h2> -->
    </div>
    <TourismusRegionen />
  </div>
</template>

<script>
import TourismusRegionen from "./components/TourismusRegionen.vue";
import TikLogoN from "./components/TikLogoN.vue";

export default {
  name: "App",
  components: {
    TourismusRegionen,
    TikLogoN,
  },
};
</script>

./components/TourismusRegionen.vue
