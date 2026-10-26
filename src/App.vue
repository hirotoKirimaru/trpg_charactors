<template>
  <v-app>
    <v-toolbar app>
      <Auth />
    </v-toolbar>

    <v-content>
      <Tabs />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Auth from "@/components/Auth.vue";
import Tabs from "@/components/Tabs.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

@Component({
  components: {
    Auth,
    Tabs
  }
})
export default class App extends Vue {
  /**
   * Firebaseから必要な初期表示情報を取得する。
   */
  mounted(): void {
    firebase
      .database()
      .ref("games")
      .on("value", result => {
        let val = result!.val();
        if (val == null) {
          return;
        }
        this.$store.commit("setGames", val);
      });
  }
}
</script>
