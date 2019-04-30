<template>
  <div class="charactors">
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="name">ゲーム名</th>
          <th class="page">キャラクター名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="charactor in charactors" :key="charactor.id">
          <td>{{ charactor.id }}</td>
          <td>{{ charactor.gameId }}</td>
          <td>{{ charactor.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Charactors extends Vue {
  @Prop() private charactors!: any;

  mounted(): void {}
}
</script>

<style scoped></style>
