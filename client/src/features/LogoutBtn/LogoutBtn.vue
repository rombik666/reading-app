<script setup>
  import axios from '../../shared/axios/axios.js';

  
  const queryToLogout = () => {
    axios.post('/api/logout');
  }

</script>
 
<template>
  <button @click="queryToLogout">Выйди из нее</button>
</template>
 
<style scoped>
 
</style>