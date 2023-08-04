<script setup>
  import store from "./scripts/store/store.js"
</script>

<template>
  {{ store.state.setup }}
  {{ store.state.punchline }}
</template>

<style scoped>

</style>
