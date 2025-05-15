<template>
  <h1>pinia 연습하기</h1>
  <div style="text-align: center;">
    <ParentPage v-for="family in familyInfo" :key="family.familyName"
      :family="family"/>
  </div>
</template>

<script setup>
  import ParentPage from './ParentPage.vue'
  import { useFamilyStore } from '@/stores/family'


  const store = useFamilyStore()
  const familyInfo = store.familyInfo
</script>

<style scoped>

</style>