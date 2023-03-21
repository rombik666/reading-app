<script setup>
  import { ref, watchEffect } from 'vue'

  let string = 'sang as they flew overhead, and a gentle breeze';
  const props = defineProps(['state'])
  const data = ref(string.split(' '))
  const vector = ref(data.value[0])
  let timer;
  let i = 0;

  function start(temp) {
    
    if (!temp) {
      
      timer = setInterval(() => {
        if (i < data.value.length) {
          vector.value = data.value[i];
          i++;
        } else {
          i = 0;
          return;
        }
      }, 400);
    } else {
      clearInterval(timer)
      vector.value = data.value[i]

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
      <marquee width="300px" behavior="scroll" direction="right" class="h5 text-white">sang as they flew overhead, and a gentle breeze</marquee>
    </div>
  </div>
</template>
 
<style scoped>

</style>