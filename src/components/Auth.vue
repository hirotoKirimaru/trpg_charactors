<template>
  <div class="auth">
    <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <div v-if="userStatus" key="login" class="navbar-item">
      <p class="navbar-item">{{ user.displayName }}</p>
      <button type="button" @click="doLogout">
        Sign out
      </button>
    </div>
    <!-- 未ログイン時にはログインボタンを表示 -->
    <div v-else key="logout">
      <button type="button" class="google-button" @click="doLogin">
        <span class="google-button__icon"> </span>
        <span class="google-button__text">Sign in with Google</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Firebase from "@/firebase.ts";

// created
Component.registerHooks(["created"]);

@Component
export default class Auth extends Vue {
  created() {
    Firebase.onAuth();
  }
  get user(): any {
    return this.$store.getters.user;
  }
  get userStatus(): any {
    return this.$store.getters.isSignedIn;
  }
  doLogin() {
    Firebase.login();
  }

  doLogout() {
    Firebase.logout();
  }
}
</script>
