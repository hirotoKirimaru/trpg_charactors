<template>
  <v-container>
    <v-flex>
      <v-card class="mx-auto" color="cyan darken-4" dark>
        <v-card-title>
          <span class="title font-weight-light">当サイトの概要</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          TRPGでオンライン上でキャラクターを作成した場合、各ゲームごとにキャラクター作成ページが異なってしまい、自分のキャラクターを見失ってしまうこともありました。<br />
          そのキャラクター管理の煩雑さを省き、一元管理できるようにする目的で当ページは作成しております。
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card class="mx-auto">
        <v-card-title>
          <span class="title font-weight-light">当サイトの使い方</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          Charactorsタブのnew
          Itemをクリックし、自分のキャラクターを登録してください。
          自分が作成したいゲームのカテゴリがない、またはゲームの作成URLが異なる場合はご連絡ください。
          手動で登録いたします。
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card class="mx-auto" color="cyan darken-4" dark>
        <v-card-title>
          <span class="title font-weight-light">注意</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          バックアップを取っていないため、データの永続性は保証できません。ご了承ください。
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card class="mx-auto">
        <v-card-title>
          <span class="title font-weight-light">連絡はこちら</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          作者：きり丸(ないない) @nainaistar
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card class="mx-auto" color="cyan darken-4" dark>
        <v-card-title>
          <span class="title font-weight-light">ソースはこちら</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          https://github.com/hirotoKirimaru/trpg_charactors
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Etc extends Vue {}
</script>
