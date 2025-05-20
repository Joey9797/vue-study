<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink> | 
        <RouterLink :to="{ name: 'signup' }">Sign up</RouterLink> | 
        <RouterLink :to="{ name: 'signin' }">Sign in</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
