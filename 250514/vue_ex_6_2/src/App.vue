
<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <span> | </span>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <span> | </span>
      <RouterLink :to="{ name: 'user', params:{ name:username } }">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const username = ref('admin')
</script>

<style scoped>
</style>
