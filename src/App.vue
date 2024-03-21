<template>
  <div class="relative">
    <TikLogoN class="fixed h-[150px]"></TikLogoN>
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
