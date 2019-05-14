<template>
  <div>
    <Games />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Games from "@/components/Games.vue";

@Component({
  components: {
    Games
  }
})
export default class GamesView extends Vue {}
</script>
