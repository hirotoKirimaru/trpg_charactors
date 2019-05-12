<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>ゲーム</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table :headers="headers" :items="games" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>
          <a :href="props.item.page" target="blank">{{ props.item.page }}</a>
        </td>
      </template>
      <template v-slot:no-data> </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "@/class/Game";

Component.registerHooks(["created"]);

@Component
export default class Games extends Vue {
  games: Array<Game> = [];
  dialog: boolean = false;
  headers: any = [
    { text: "ゲーム名", value: "name" },
    { text: "キャラメイクページ", value: "page" }
  ];

  created(): void {
    this.games = this.$store.getters.games;
  }
}
</script>
