<template>
  <div v-for="user in users" :key="user.name">
    <p>이름 : {{ user.name }}</p>
    <p>잔고 : {{ user.balance }}</p>
    <RouterLink :to="{ name: 'update', params:{ name:user.name}}">update balance</RouterLink>
    <hr>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  const props = defineProps({
    users: Array
  })
  // console.log(props.users)
</script>

<style scoped>

</style>