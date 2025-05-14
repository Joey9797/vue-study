<template>
  <li>
    <RouterLink :to="{ name: 'post-detail', params:{ id: post.id }}">제목 : {{ post.title }}</RouterLink>
  </li>
  
  <!-- <RouterView/> -->
</template>

<script setup>
  import { RouterLink } from 'vue-router'

  const props = defineProps({
    post: Object
  })

</script>

<style scoped>

</style>