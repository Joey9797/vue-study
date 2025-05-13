<template>
  <h1>자식 페이지입니다.</h1>
  <p>이름 : {{ child.name }}</p>
  <p>나이 : {{ child.age }}</p>
  <p>용돈 : {{ child.balance }}</p>
  <button @click="emitGiveMeAllowance(child)">용돈 더 주세요</button>
</template>

<script setup>
  const props = defineProps({
    child : Object
  })

  const emit = defineEmits(['giveMeAllowance'])

  function emitGiveMeAllowance(child) {
    emit('giveMeAllowance', child.name)
  }
</script>

<style scoped>
</style>