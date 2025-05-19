<template>
  <RouterLink :to="{ name:'create'}">게시글 생성</RouterLink>
  <div v-for="article in store.articles" :key="article.id">
    <h3>{{ article.id }}번 게시글</h3>
    <p>제목: {{ article.title }}</p>
    <p>내용: {{ article.content }}</p>
    <hr>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticleStore } from '@/stores/articles'
import { RouterLink, RouterView } from 'vue-router'
const store = useArticleStore()

onMounted(() => {
  store.getArticles()
})

// const { articles } = store
// const articles = store.articles
// console.log(articles)
</script>

<style lang="scss" scoped>

</style>