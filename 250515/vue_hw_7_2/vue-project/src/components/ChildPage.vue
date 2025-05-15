<template>
  <div v-for="child in children" :key="child.name" style="background-color: white;">
    <h3>자식 페이지</h3>
    <p>{{ child.name }}</p>
  </div>
</template>

<script setup>
  defineProps({
    children: Array
  })
</script>

<style scoped>

</style>