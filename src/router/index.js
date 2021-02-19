import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

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
    path: "/login",
    name: "DonorLogin",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/DonorLogin.vue")
  },
  {
    path: "/dashboard",
    beforeEnter(to, from, next) {
      if (store.state.token !== null) {
        next();
      } else {
        next("/login");
        console.log("redirected to login page!!");
      }
    },
    name: "DonorDashboard",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/DonorDashboard.vue"),
    children: [
      {
        path: "/home",
        name: "DonorHomePage",
        component: () =>
          import(
            /* webpackChunkName: "donorhome" */ "../components/donor/DonorHome.vue"
          )
      },
      {
        path: "/profile",
        name: "DonorProfile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../components/donor/DonorProfile.vue"
          )
      },
      {
        path: "/donation",
        name: "DonorDonation",
        component: () =>
          import(
            /* webpackChunkName: "donorhome" */ "../components/donor/BloodDonation.vue"
          )
      }
    ]
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
