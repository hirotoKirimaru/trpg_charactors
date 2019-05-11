<template>
  <v-app>
    <v-toolbar app>
      <Auth />
    </v-toolbar>

    <v-content>
      <Tabs />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Auth from "@/components/Auth.vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {
    Auth,
    Tabs
  }
})
export default class App extends Vue {}
</script>
