<script setup>
  import store from "./scripts/store/store.js"
  import { ref } from "vue";

  let showPunchline = ref(false);
</script>

<template>
  <Suspense class="">
    <template #default>
      {{ store.state.setup }}
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  <button @click="showPunchline = true">?</button>
  <div v-if="showPunchline" class="punchline">{{ store.state.punchline }}</div>
</template>

<style scoped>
  
</style>
