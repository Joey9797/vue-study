<template>
  <h2>게시글 생성 페이지</h2>
  <form @submit.prevent="createArticle">
    <label for="title">제목: </label>
    <input type="text" id="title" v-model="title">
    <label for="content">내용: </label>
    <textarea id="content" v-model="content"></textarea>
    <input type="submit">
  </form>

</template>

<script setup>
  import axios from 'axios'
  import { useArticleStore } from '@/stores/articles.js'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useArticleStore()
  const title = ref(null)
  const content = ref(null)

  const createArticle = function() {
    axios({
      method: 'post',
      url: store.GET_ARTICLE_URL,
      data:{
        title: title.value,
        content: content.value
      }
    })
    .then(res => {
      router.push({ name:'home' })
    })
    .catch(err => console.log(err))
  }
</script>

<style scoped>

</style>