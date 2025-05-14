<template>
  <div v-if="post">
  <p>번호:{{ post.id }}</p>
  <p>제목:{{ post.title }}</p>
  <p>내용:{{ post.content }}</p>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, computed } from 'vue'
  
  const posts = ref([
    {id:1, title:'Post 1', content:'Content 1',},
    {id:2, title:'Post 2', content:'Content 2',},
    {id:3, title:'Post 3', content:'Content 3',}
  ])
  
  const route = useRoute()
 const post = computed(() => {
  const postId = Number(route.params.id)
  return posts.value.find(p => p.id === postId)
})


</script>

<style scoped>

</style>