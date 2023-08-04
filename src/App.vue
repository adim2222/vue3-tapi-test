<script setup>
import store from "./scripts/store/store.js"
import { ref } from "vue";

let showPunchline = ref(false);
</script>

<template>
  <div class="setup">
    <Suspense>
      <template #default>
        {{ store.state.setup }}
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
  <button @click="showPunchline = true">?</button>
  <div v-if="showPunchline" class="punchline">{{ store.state.punchline }}</div>
</template>

<style scoped>
  .setup {
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    font-size: 50px;
  }
  .punchline {
    text-align: center;
    font-size: 60px;
    animation-name: entry;
    animation-duration: 1s;
  }
  @keyframes entry {
    0% {opacity: 0%; transform: translate(0px,100px);}
    100% {opacity: 100%; transform: translate(0px,0px);}
  }
</style>
