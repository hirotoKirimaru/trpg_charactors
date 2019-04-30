<template>
  <div class="games">
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="name">ゲーム名</th>
          <th class="page">キャラクター作成ページ</th>
          <th class="del">削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.id">
          <td>{{ game.id }}</td>
          <td>{{ game.name }}</td>
          <td>
            <a :href="game.page">{{ game.page }}</a>
          </td>
          <td>
            <v-btn color="warning" @click="deleteGame">削除</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <v-btn class="" @click="delGame">追加</v-btn>
    <v-btn class="" @click="saveGames">保存</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

@Component
export default class Games extends Vue {
  @Prop() private games!: any;

  mounted(): void {}

  deleteGame(): void {
    // this.games.splice(this.selectedIndex, 1);
    // if (this.selectedIndex > 0){
    //   this.selectedIndex--;
    // }
  }

  saveGames(): void {
    firebase
      .database()
      .ref("games/" + this.$store.getters.user.uid)
      .set(this.games);
  }
}
</script>

<style scoped></style>
