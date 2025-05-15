<template>
  <div style="background-color: aliceblue; padding: 1rem; margin-bottom: 1rem;">
    <h2>부모 컴포넌트</h2>
    <p>{{ family.father }}</p>
    <p>{{ family.mother }}</p>
    <ChildPage :children="family.children"/>
  </div>
</template>

<script setup>
  import ChildPage from './ChildPage.vue'

  const props = defineProps({
    family: Object
  })
  

</script>

<style scoped>

</style>