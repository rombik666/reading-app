<script setup>
  import axios from 'axios';
  
  const queryToLogout = () => {
    axios.post('/api/logout');
  }

</script>
 
<template>
  <button @click="queryToLogout">Выйди из нее</button>
</template>
 
<style scoped>
 
</style>