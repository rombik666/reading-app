<script setup>
  import { ref } from 'vue'
  import Next from '../../UI/Next.vue';
  import Prev from '../../UI/Prev.vue';

  const sys = ref(0)

  const range = ref(20)

  function changeState() {
    sys.value = !sys.value
    console.log(sys.value)
  }

  function getScroll(feed) {
    range.value = Number(feed.value);
  }
  
</script>
 
<template>
  <div class="container mt-5 mh-100">
    <Word :state="sys" :speed="range" />
    <div class="btn-list row mt-5 mb-3">
      <Prev />
      <Play @click="changeState" />
      <Next />
    </div>
    <Scroll @getScroll="getScroll" :state="sys" />
  </div>
</template>
 
<style scoped>
  .btn-list {
    justify-content: center;
    gap: 50px;
  }
</style>