import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    games: [],
    status: false
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    setGames(state, games) {
      state.games = games;
    },
    onUserStatusChanged(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    games(state) {
      return state.games;
    },
    isSignedIn(state) {
      return state.status;
    }
  },
  actions: {}
});
