<template>
  <div class="home">
    <Games :charactors="charactors" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Games from "@/components/games.vue";

@Component({
  components: {
    Games
  }
})
export default class Home extends Vue {
  /** data */
  charactors: any = [
    { id: 0, game: "シノビガミ", name: "渡良瀬　準" },
    { id: 1, game: "シノビガミ", name: "阿紫花　英良" }
  ];
}
</script>
