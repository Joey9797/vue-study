<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './components/MainPage.vue'

</script>

<template>
  <MainPage/>
  <div>
    <RouterLink :to="{ name: 'some'}">Some</RouterLink> |
    <RouterLink :to="{ name: 'other'}">Other</RouterLink> |
    <RouterLink :to="{ name: 'students'}">Students</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
