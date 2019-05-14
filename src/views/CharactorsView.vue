<template>
  <div>
    <Charactors />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Charactors from "@/components/Charactors.vue";

@Component({
  components: {
    Charactors
  }
})
export default class CharactorsView extends Vue {}
</script>
