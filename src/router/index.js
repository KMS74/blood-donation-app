import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/donorsearch",
    name: "DonorSearch",
    component: () =>
      import(/* webpackChunkName: "donorsearch" */ "../views/DonorSearch.vue")
  },
  {
    path: "/register",
    name: "DonorRegister",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/DonorRegister.vue")
  },
  {
    path: "/team",
    name: "ProjectTeam",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/ProjectTeam.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
