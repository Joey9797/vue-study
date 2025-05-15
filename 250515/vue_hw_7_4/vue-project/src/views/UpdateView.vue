<template>
  <h2>데이터 수정 페이지</h2>
  <p>이름 : {{ user.name }}</p>
  <p>잔고 : {{ user.balance }}</p>
  <button @click="increateBalance">+</button>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, computed, watch } from 'vue'
  import { useBalanceStore } from '@/stores/balance'

  const store = useBalanceStore()
  const route = useRoute()
  const username = ref(route.params.name)
  const user = computed(() => store.getUser(username.value))
  
  const increateBalance = function() {
    store.increateBalance(username.value)
  }
</script>

<style scoped>

</style>