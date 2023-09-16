
<script setup>
  import { ref } from 'vue';

  import axios from '../../shared/axios/axios.js';

  const email = ref('');
  const password = ref('');

  const queryToLogin = () => {
    axios.post('/api/login', {
      email: email.value,
      password: password.value,
    })
  }
</script>
 
<template>
  <div class="login-form">
    <h1>Войди в меня...</h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click="queryToLogin">Войти в нее</button>
  </div>
</template>
 
<style scoped>
 
</style>