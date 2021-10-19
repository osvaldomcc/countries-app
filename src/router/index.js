import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_MAIN_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/HomePage.vue"),
    },
    {
      name: "country-detail",
      path: "/country/:id",
      component: () => import("../views/CountryDetailPage.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundPage.vue"),
    },
  ],
});
export default router;
