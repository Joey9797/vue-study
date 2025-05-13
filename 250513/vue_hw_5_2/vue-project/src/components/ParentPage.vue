<template>
  <h1>부모 페이지입니다.</h1>
  <ChildPage v-for="child in children" :key="child.name" :child="child"/>
</template>

<script setup>
  import ChildPage from './ChildPage.vue' // 데이터를 전달해줄 자식 명시
  import { ref } from 'vue'

const children = ref([
  {name: '김하나', age: 30},
  {name: '김두리', age: 20},
  {name: '김서이', age: 10}
])

</script>

<style scoped>

</style>