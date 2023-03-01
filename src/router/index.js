/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// import Projects from "../components/Projects.vue";
// import Contact from "../components/Contact.vue";
import App from "@/components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
    // {
    //   path: "/projects",
    //   name: "projects",
    //   component: Projects
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: Contact
    // }
  ]
});
