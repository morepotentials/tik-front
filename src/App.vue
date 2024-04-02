<template>
  <div class="relative">
    <div class="fixed z-10 flex flex-row">
      <TikLogoN class="h-[150px] hidden md:block mt-5 ml-5"></TikLogoN>
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
