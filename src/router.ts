import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/games",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import(/* webpackChunkName: "admin" */ "./components/AdminGames.vue")
    },
    {
      path: "/game",
      name: "game",
      component: () =>
        import(/* webpackChunkName: "game" */ "./components/Games.vue")
    },
    {
      path: "/chara",
      name: "chara",
      component: () =>
        import(
          /* webpackChunkName: "charactor" */ "./components/Charactors.vue"
        )
    }
  ]
});
