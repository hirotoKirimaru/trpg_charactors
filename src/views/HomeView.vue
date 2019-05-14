<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/components/Home.vue";

@Component({
  components: {
    Home
  }
})
export default class EtcView extends Vue {}
</script>
