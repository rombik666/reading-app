
<script setup>
  import { ref } from 'vue';

  import axios from 'axios';

  const email = ref('');
  const password = ref('');

  const queryToReg = () => {
    axios.post('/api/registration', {
      email: email.value,
      password: password.value,
    })
  }
</script>
 
<template>
  <div class="login-form">
    <h1>Зарегистрируйся в меня...</h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click="queryToReg">Зарегистрироваться в ней</button>
  </div>
</template>
 
<style scoped>
 
</style>