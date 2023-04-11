<script setup>
  import { ref } from 'vue'

  const isActive = ref(0);

  function changeActive() {
    
  }
</script>
 
<template>
  <div class="prev" :class="{active: isActive}" @click="changeActive">

  </div>
</template>
 
<style scoped>
 .prev {
    width: 50px;
    height: 50px;
    background-image: url('../assets/img/prev.svg');
    background-repeat: no-repeat;
    transition: all .3s ease;
  }
  .prev:hover {
    opacity: .6;
  }
</style>