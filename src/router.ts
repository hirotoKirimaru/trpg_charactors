import Vue from "vue";
import Router from "vue-router";
import Games from "./components/Games.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "games",
      alias: "/games",
      component: Games
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
        import(
          /* webpackChunkName: "charactor" */ "./components/Charactors.vue"
        )
    }
  ]
});
