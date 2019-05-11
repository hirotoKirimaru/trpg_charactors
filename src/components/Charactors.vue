<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>キャラクター</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-select
                    v-model="editedItem.gameId"
                    :items="games"
                    item-text="name"
                    item-value="id"
                    label="Game"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.name"
                    label="name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.url"
                    label="url"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="charactors" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ getNameById(props.item.gameId) }}</td>
        <td>
          <a :href="props.item.url" target="blank">{{ props.item.name }}</a>
        </td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
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
import Charactor from "@/class/Charactor";
import Game from "@/class/Game";

// created
Component.registerHooks(["created"]);

@Component
export default class Charactors extends Vue {
  @Prop() games!: Array<Game>;

  dialog: boolean = false;
  headers: any = [
    { text: "ゲーム名", value: "game" },
    { text: "キャラ名", value: "name" },
    { text: "Actions", value: "action", sortable: false, align: "center" }
  ];
  charactors: Array<Charactor> = [];
  editedIndex: number = -1;
  editedItem: Charactor = Charactor.default();

  getNameById(id: number) {
    let targetGame = this.games.find(game => game.id === id);
    return targetGame!.name;
  }

  /**
   * ダイアログのタイトルを取得する。
   */
  get formTitle(): string {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  /**
   * 選択したデータに紐づく情報をdataに格納する。
   * また、ダイアログ用に値を変更する。
   */
  editItem(item: Charactor) {
    this.editedIndex = this.charactors.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  /**
   * 選択したデータに紐づく情報をdataから削除する。
   */
  deleteItem(item: Charactor) {
    const index = this.charactors.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      this.charactors.splice(index, 1);
  }
  /**
   * ダイアログ終了すると同時に、選択中データを格納する変数を初期化する。
   */

  close() {
    this.dialog = false;
    setTimeout(() => {
      this.editedItem = Object.assign({}, Charactor.default());
      this.editedIndex = -1;
    }, 300);
  }

  /**
   * ダイアログで更新したデータを変数に格納する。
   * 新規登録時はidにgamesのmaxId + 1の値を設定する。
   */
  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.charactors[this.editedIndex], this.editedItem);
    } else {
      let maxId: number = this.charactors.reduce((a, b) =>
        a.id > b.id ? a : b
      ).id;
      this.editedItem.id = ++maxId;

      this.charactors.push(this.editedItem);
    }

    this.saveCharactors();

    this.close();
  }

  /**
   * Firebaseから必要な初期表示情報を取得する。
   */
  created(): void {
    firebase
      .database()
      .ref("charactors/" + this.$store.getters.user.uid)
      .on("value", result => {
        this.charactors = result!.val();
      });
  }

  /**
   * Firebaseにgamesを更新する。
   */
  saveCharactors(): void {
    firebase
      .database()
      .ref("charactors/" + this.$store.getters.user.uid)
      .set(this.charactors, error => {
        if (error) {
          alert("更新に失敗しました");
        } else {
          alert("更新に成功しました");
        }
      });
  }
}
</script>
