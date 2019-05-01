<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>ゲーム</v-toolbar-title>
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
                  <v-text-field
                    v-model="editedItem.id"
                    label="id"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.name"
                    label="name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.page"
                    label="page"
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
    <v-data-table :headers="headers" :items="games" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.page }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

class Game {
  id: number;
  name: String;
  page: String;

  constructor(id: number, name: String, page: String) {
    this.id = id;
    this.name = name;
    this.page = page;
  }
}

// created
Component.registerHooks(["created2"]);

@Component
export default class Games extends Vue {
  dialog: boolean = false;
  headers: any = [
    { text: "id", value: "id", sortable: false },
    { text: "キャラ名", value: "name" },
    { text: "キャラメイクページ", value: "nage" }
  ];
  games: Array<Game> = [];
  editedIndex: number = -1;
  editedItem: Game = {
    id: 0,
    name: "",
    page: ""
  };
  defaultItem: Game = {
    id: 0,
    name: "",
    page: ""
  };

  get formTitle(): string {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  editItem(item: Game) {
    this.editedIndex = this.games.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: Game) {
    const index = this.games.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      this.games.splice(index, 1);
  }

  initialize() {
    this.created2();
  }

  close() {
    this.dialog = false;
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }, 300);
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.games[this.editedIndex], this.editedItem);
    } else {
      this.games.push(this.editedItem);
    }
    this.close();
  }

  created2(): void {
    firebase
      .database()
      // .ref("games/")
      .ref("games/" + this.$store.getters.user.uid)
      .on("value", result => {
        if (result === null) {
          return;
        }
        this.games = result.val();
      });
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
