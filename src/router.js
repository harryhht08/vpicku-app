import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SchedulePickup from "./views/SchedulePickup.vue";
import CampusTour from "./views/CampusTour.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/schedule-pickup", component: SchedulePickup },
  { path: "/campus-tour", component: CampusTour },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
