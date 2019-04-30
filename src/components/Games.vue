<template>
  <div class="games">
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="name">ゲーム名</th>
          <th class="page">キャラクター作成ページ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.id">
          <td>{{ game.id }}</td>
          <td>{{ game.name }}</td>
          <td>
            <a :href="game.page">{{ game.page }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Games extends Vue {
  @Prop() private games!: any;

  mounted(): void {}
}
</script>

<style scoped></style>
