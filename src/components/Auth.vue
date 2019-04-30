<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex v-if="userStatus" key="login">
        <v-layout justify-left md5>
          <v-btn color="info" @click="doLogout">
            Sign out
          </v-btn>

          <p class="navbar-item">{{ user.displayName }}</p>
        </v-layout>
        <v-layout justify-left md5>
          <v-btn color="info" @click="doLogin">
            Sign in with Google
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex v-else key="logout"> </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Firebase from "@/firebase.ts";

// created
Component.registerHooks(["created"]);

@Component
export default class Auth extends Vue {
  created(): void {
    Firebase.onAuth();
  }
  get user(): firebase.User {
    return this.$store.getters.user;
  }
  get userStatus(): boolean {
    return this.$store.getters.isSignedIn;
  }
  doLogin(): void {
    Firebase.login();
  }

  doLogout(): void {
    Firebase.logout();
  }
}
</script>
