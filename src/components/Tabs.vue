<template>
  <v-tabs color="cyan" dark slider-color="yellow">
    <v-tab v-for="(item, index) in items" :key="index" ripple>{{
      item.name
    }}</v-tab>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Firebase from "@/firebase.ts";

@Component
export default class Auth extends Vue {
  items: any = [
    {
      name: "Game",
      url: "/game"
    },
    {
      name: "Charactor",
      url: "/charactor"
    },
    {
      name: "Etc.",
      url: "/etc"
    }
  ];
}
</script>
