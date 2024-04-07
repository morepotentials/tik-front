import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ImpressumPage from "@/views/ImpressumPage.vue";
import DatenschutzPage from "@/views/DatenschutzPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: DatenschutzPage,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: ImpressumPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
