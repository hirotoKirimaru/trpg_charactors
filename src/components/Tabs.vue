<template>
  <v-tabs color="cyan" dark slider-color="yellow">
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      ripple
      @click="transition(item.url)"
      >{{ item.name }}</v-tab
    >
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Firebase from "@/firebase.ts";

@Component
export default class Auth extends Vue {
  items: any = [
    {
      name: "Home",
      url: "/home"
    },
    {
      name: "Game",
      url: "/games"
    },
    {
      name: "Charactor",
      url: "/charactors"
    }
  ];

  transition(url: string) {
    this.$router.push(url);
  }
}
</script>
