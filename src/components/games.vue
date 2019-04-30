<template>
  <div class="games">
    <div v-for="charactor in charactors" :key="charactor.id">
      {{ charactor.game }}
      {{ charactor.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Games extends Vue {
  @Prop() private charactors!: any;

  mounted(): void {
    alert(this.charactors[0].game);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
