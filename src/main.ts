import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import Firebase from "@/firebase.ts";
Firebase.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
