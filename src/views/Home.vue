<template>
  <div class="home">
    <Games :games="games" />
    <div v-if="userStatus">
      <Charactors :games="games" />
    </div>
    <div v-else>
      自分用のユーザを確認した場合、ログインしてください
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Games from "@/components/Games.vue";
import Charactors from "@/components/Charactors.vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Game from "@/class/Game";

// created
Component.registerHooks(["created"]);

@Component({
  components: {
    Games,
    Charactors
  }
})
export default class Home extends Vue {
  games: Array<Game> = [];

  get userStatus(): boolean {
    return this.$store.getters.isSignedIn;
  }

  /**
   * Firebaseから必要な初期表示情報を取得する。
   */
  created(): void {
    firebase
      .database()
      .ref("games")
      .on("value", result => {
        this.games = result!.val();
      });
  }
}
</script>
