<template>
  <h1>로그인 페이지</h1>
  <form @submit.prevent="onSignInFormSubmit">
    <div>
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">password : </label>
      <input type="text" id="password" v-model="password">
    </div>
    <input type="submit" value="submit">
  </form>
</template>

<script setup>
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const router = useRouter()
  const username = ref(null)
  const password = ref(null)

  const onSignInFormSubmit = function () {
    axios({
      method:'post',
      url:'http://127.0.0.1:8000/accounts/login/',
      data:{
        username: username.value,
        password: password.value
      }
    })
    .then(res => {
      const token = res.data.key
      localStorage.setItem('authToken', token)
      router.push({ name:'home'})
    })
    .catch(err => console.log(err))
  }
</script>

<style scoped>

</style>