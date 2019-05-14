import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import(/* webpackChunkName: "admin" */ "./components/AdminGames.vue")
    },
    {
      path: "/charactors",
      name: "charactors",
      component: () =>
        import(/* webpackChunkName: "charactor" */ "./views/CharactorsView.vue")
    },
    {
      path: "/games",
      name: "games",
      component: () =>
        import(/* webpackChunkName: "games" */ "./views/GamesView.vue")
    }
  ]
});
