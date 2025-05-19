import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([])

  const GET_ARTICLE_URL = 'http://127.0.0.1:8000/api/v1/articles/'
  const getArticles = function () {
    axios({
      method: 'get',
      url: GET_ARTICLE_URL
    })
    .then(res => {
      articles.value = res.data
    })
    .catch(err => console.log(err))
  }

  return { articles, GET_ARTICLE_URL, getArticles }
})
