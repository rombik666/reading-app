<script setup>
  import { RouterLink } from 'vue-router';
</script>
 
<template>
  <RouterLink to="/play">
    <button class="submit">
    
    </button>
  </RouterLink>
  
</template>
 
<style scoped>
  .submit {
    width: 40px;
    height: 40px;
    background-image: url('./btn.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
</style>