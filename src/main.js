import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import SearchPage from "./views/SearchPage";
import WatchPage from "./views/WatchPage";
import AboutPage from "./views/AboutPage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: SearchPage,
    },
    {
      path: "/watch/:id",
      component: WatchPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
