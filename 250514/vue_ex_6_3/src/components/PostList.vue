<template>
  <h2>{{ $route.params.username }}님이 작성한 게시글</h2>
  <ol>
    <PostListItem v-for="post in posts" :key="post.id" :post="post"/>
  </ol>
  <RouterView/>
</template>

<script setup>
import PostListItem from './PostListItem.vue';
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const posts = ref([
  {id:1, title:'Post 1', content:'Content 1',},
  {id:2, title:'Post 2', content:'Content 2',},
  {id:3, title:'Post 3', content:'Content 3',}
])

</script>

<style scoped>

</style>