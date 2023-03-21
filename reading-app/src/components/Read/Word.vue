<script setup>
  import { ref, watchEffect } from 'vue'

  let string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit fugit ducimus maiores? Fugiat, quam corrupti consequatur architecto minus eveniet vero modi nobis praesentium porro temporibus culpa ratione. Vero, dolore.';
  const props = defineProps(['state'])
  const data = ref(string.split(' '))
  const vector = ref(data.value[0])
  let timer;

  function start(temp) {
    
    if (!temp) {
      let i = 0;
      timer = setInterval(() => {
        if (i < data.value.length) {
          vector.value = data.value[i];
          i++;
        } else {
          return;
        }
      }, 400);
    } else {
      clearInterval(timer);
    }
  }

  watchEffect(() => start(!props.state));

  
  
  



</script>
 
<template>
  <div class="row mt-3 mb-3 text-center">
    <div class="col">
      <h1 class="mainTT text-white">{{ vector }}</h1>
    </div>
  </div>
  <div class="row mt-3 mb-3 text-center">
    <div class="col">
      <p class="h5 text-white">sang as they flew overhead, and a gentle breeze</p>
    </div>
  </div>
</template>
 
<style scoped>
  .mainTT {
    transition: all;
  }
</style>