<script setup>
  import { ref } from 'vue'

  const isActive = ref(0);

  function changeActive() {
    
  }
</script>
 
<template>
  <div class="next" :class="{active: isActive}" @click="changeActive">

  </div>
</template>
 
<style scoped>
 .next {
    width: 50px;
    height: 50px;
    background-image: url('../assets/img/next.svg');
    background-repeat: no-repeat;
    transition: all .3s ease;
  }
  .next:hover {
    opacity: .6;
  }
</style>