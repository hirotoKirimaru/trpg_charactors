<template>
  <div id="app">
    <Auth />
    <router-view />
  </div>
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
