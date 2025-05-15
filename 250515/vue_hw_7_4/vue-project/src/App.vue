<template>
  <RouterLink :to="{ name: 'main' }">main</RouterLink>
  <h1>pinia + router 연습하기</h1>
  <RouterView/>
</template>

<script setup>
  import { useRoute, RouterLink, RouterView } from 'vue-router'
  // const route = useRoute()
</script>

<style scoped>

</style>