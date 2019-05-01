<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>キャラクター</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" @click="saveCharactors">Save</v-btn>
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
                  <v-text-field
                    v-model="editedItem.id"
                    label="id"
                    type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.game"
                    label="game"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.name"
                    label="name"
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
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.game }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
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

class Charactor {
  id: number;
  gameId: number;
  game: String;
  name: String;
  key: String;

  constructor(
    id: number,
    gameId: number,
    game: String,
    name: String,
    key: String
  ) {
    this.id = id;
    this.gameId = gameId;
    this.game = game;
    this.name = name;
    this.key = key;
  }
}

// created
Component.registerHooks(["created"]);

@Component
export default class Charactors extends Vue {
  dialog: boolean = false;
  headers: any = [
    { text: "id", value: "id", sortable: false },
    { text: "ゲーム名", value: "game" },
    { text: "キャラ名", value: "name" },
    { text: "Actions", value: "action", sortable: false }
  ];
  charactors: Array<Charactor> = [];
  editedIndex: number = -1;
  editedItem: Charactor = {
    id: 0,
    gameId: 0,
    game: "",
    name: "",
    key: ""
  };
  defaultItem: Charactor = {
    id: 0,
    gameId: 0,
    game: "",
    name: "",
    key: ""
  };

  get formTitle(): string {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  editItem(item: Charactor) {
    this.editedIndex = this.charactors.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: Charactor) {
    const index = this.charactors.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      this.charactors.splice(index, 1);
  }

  close() {
    this.dialog = false;
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }, 300);
  }

  save() {
    // 更新
    if (this.editedIndex > -1) {
      let editItemId = this.editedItem.id;
      if (
        !(this.charactors[this.editedIndex].id === editItemId) &&
        this.charactors.some(element => {
          return element.id === editItemId;
        })
      ) {
        alert("id重複してるよ！");
        return;
      }

      Object.assign(this.charactors[this.editedIndex], this.editedItem);
      // 新規登録
    } else {
      if (
        !(this.charactors === null) ||
        this.charactors.some(element => {
          return element.id === this.editedItem.id;
        })
      ) {
        alert("id重複してるよ！");
        return;
      }

      this.charactors.push(this.editedItem);
    }
    this.close();
  }

  created(): void {
    firebase
      .database()
      .ref("charactors/" + this.$store.getters.user.uid)
      .on("value", result => {
        if (result === null) {
          return;
        }
        this.charactors = result.val();
      });
  }

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
