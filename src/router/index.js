import { createWebHistory, createRouter } from "vue-router";
import MyHome from "@/views/MyHome.vue";
import MyAbout from "@/views/MyAbout.vue";

const routes = [
  {
    path: "/",
    name: "myHome",
    component: MyHome,
  },
  {
    path: "/about",
    name: "myAbout",
    component: MyAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;