<template>
  <div class="home">
    <Games :games="games" />
    <Charactors :charactors="charactors" />
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
  /** data */
  games: any = [
    {
      id: 0,
      name: "シノビガミ",
      page: "https://character-sheets.appspot.com/shinobigami/"
    },
    {
      id: 1,
      name: "ウタカゼ",
      page: "https://charasheet.vampire-blood.net/utakaze_pc_making.html"
    },
    {
      id: 2,
      name: "クトゥルフ",
      page: "https://charasheet.vampire-blood.net/coc_pc_making.html"
    },
    {
      id: 3,
      name: "パラノイア",
      page: "https://charasheet.vampire-blood.net/paranoia_pc_making.html"
    },
    {
      id: 4,
      name: "ロストロイヤル",
      page: "https://character-sheets.appspot.com/lostroyal/"
    }
  ];
  charactors: Array<Object> = [
    { id: 0, gameId: 0, game: "", name: "渡良瀬　準" },
    { id: 1, gameId: 0, game: "", name: "阿紫花　英良" },
    { id: 9, gameId: 4, game: "", name: "ランダ" }
  ];

  mounted(): void {
    this.setCharactorsToGameId();
  }

  public setCharactorsToGameId() {
    this.charactors.forEach(element => {
      element.game = this.games.find(game => game.id === element.gameId).name;
    });
  }
}
</script>
