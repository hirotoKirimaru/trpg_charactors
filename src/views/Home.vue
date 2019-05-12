<template>
  <div class="home">
    <Games :games="games" />
    <div v-if="userStatus">
      <Charactors :games="games" />
    </div>
    <div v-else>
      作成したキャラクターを確認したい場合、ログインしてください
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
}
</script>
