<template>
  <div class="home" v-if="userStatus">
    <Games />
    <Charactors />
  </div>
  <div v-else>
    ログインしてください
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Games from "@/components/Games.vue";
import Charactors from "@/components/Charactors.vue";

@Component({
  components: {
    Games,
    Charactors
  }
})
export default class Home extends Vue {
  get userStatus(): boolean {
    return this.$store.getters.isSignedIn;
  }
}
</script>
