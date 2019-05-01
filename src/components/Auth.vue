<template>
  <v-layout text-xs-center wrap>
    <v-layout v-if="userStatus" key="login" row>
      <v-flex xs2>
        <v-btn color="info" @click="doLogout">
          Sign out
        </v-btn>
      </v-flex>
      <v-flex xs2>
        <p class="navbar-item">{{ user.displayName }}</p>
      </v-flex>
    </v-layout>
    <v-layout v-else key="logout" row>
      <v-flex justify-left xs2>
        <v-btn color="info" @click="doLogin">
          Sign in with Google
        </v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
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
