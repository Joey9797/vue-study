<template>
  <h1>회원 가입 페이지</h1>
  <form @submit.prevent="onSignUpFormSubmit">
    <div>
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">password : </label>
      <input type="text" id="password" v-model="password">
    </div>
    <div>
      <label for="password-confirmation">password confirmation : </label>
      <input type="text" id="password-confirmation" v-model="passwordConfirmation">
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
  const passwordConfirmation = ref(null)

  const onSignUpFormSubmit = function() {
    axios({
      method:'post',
      url:'http://127.0.0.1:8000/accounts/signup/',
      data:{
        username: username.value,
        password1: password.value,
        password2: passwordConfirmation.value
      }
    })
    .then(res => {
      const token = res.data.key
      localStorage.setItem('authToken', token)
      router.push({ name:'home'})
    })
    .catch(err => console.log(err.response.data))
  }
</script>

<style scoped>

</style>