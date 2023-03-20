<script setup>
  import { ref } from 'vue'

  const isActive = ref(0);

  function changeActive() {
    isActive.value = !isActive.value;
  }
</script>
 
<template>
  <div class="play" :class="{active: isActive}" @click="changeActive">
    
  </div>
</template>
 
<style scoped>
  .play {
    width: 50px;
    height: 50px;
    background-image: url('../assets/img/play.svg'), url('../assets/img/pause.svg');
    background-position: 0 0, -50px 0;
    background-repeat: no-repeat, no-repeat;
    transition: all .3s ease;
  }

  .active {
    background-position: -50px 0, 0 0;
  }
</style>