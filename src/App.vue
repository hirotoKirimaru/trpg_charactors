<template>
  <v-app>
    <v-toolbar app>
      <Auth />
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Auth from "@/components/Auth.vue";

@Component({
  components: {
    Auth
  }
})
export default class App extends Vue {}
</script>
