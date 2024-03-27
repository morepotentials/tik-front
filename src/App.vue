<template>
  <div class="relative">
    <div class="fixed z-10 flex flex-row">
      <TikLogoN class="h-[150px] hidden md:block mt-5 ml-5"></TikLogoN>
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
