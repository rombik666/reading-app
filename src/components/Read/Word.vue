<script setup>
  import { ref, watchEffect, computed } from 'vue'
  import { cur_text } from './statement';

  const props = defineProps({
    state: Boolean,
    speed: Number,
  })
  const data = ref(cur_text.value.split(' '))
  watchEffect(() => data.value = cur_text.value.split(' '));
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
      }, 10 * props.speed); //200 - 300 слов в минуту
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
</template>
 
<style scoped>

</style>