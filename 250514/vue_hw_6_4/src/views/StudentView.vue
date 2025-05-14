<template>
  <h1>학생 상세 정보 목록입니다.</h1>
  <div>
    <button 
      v-for="student in students" :key="student.name" 
      @click="goToDetail(student.name)"
      style="margin-right: .5rem;">
      {{ student.name }} 학생 정보 보기
    </button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router' 
  import { ref } from 'vue' 

  const students = ref([
    {name:'김하나'},
    {name:'김두리'},
    {name:'김서이'}
  ])

  const router = useRouter()
  const goToDetail = (name) => {
    router.push({ name: 'studentsDetail', params:{ name }})
  }

</script>

<style scoped>

</style>