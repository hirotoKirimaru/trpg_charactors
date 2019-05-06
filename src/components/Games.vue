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
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Game from "@/class/Game";

@Component
export default class Games extends Vue {
  @Prop() games!: Array<Game>;

  dialog: boolean = false;
  headers: any = [
    { text: "ゲーム名", value: "name" },
    { text: "キャラメイクページ", value: "page" }
  ];
}
</script>
