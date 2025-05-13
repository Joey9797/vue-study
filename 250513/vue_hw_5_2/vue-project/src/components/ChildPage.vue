<template>
  <h1>자식 페이지입니다.</h1>
  <p>이름 : {{ child.name }}</p>
  <p>나이 : {{ child.age }}</p>
</template>

<script setup>
  const props = defineProps({
    child : Object
  })
</script>

<style scoped>

</style>