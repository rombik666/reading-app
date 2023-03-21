<script setup>
  import { ref } from 'vue'
  import Next from '../../UI/Next.vue';
  import Prev from '../../UI/Prev.vue';

  const sys = ref(0)

  const range = ref("")

  function changeState() {
    sys.value = !sys.value
  }

  
 
</script>
 
<template>
  <div class="container mt-5">
    <Word :state="sys"/>
    {{ sys }}
    <div class="btn-list row mt-5 mb-3">
      <Prev />
      <Play @click="changeState" />
      <Next />
    </div>
    <div class="row text-center">
      <div class="col-lg-5 col-md-3 col-sm-3"></div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <label for="customRange" class="form-label"></label>  
      <input type="range" class="form-range" id="customRange" min="1" max="100" v-model="range">
      <p class="h6 text-white">Speed Level</p>
      </div>
      <div class="col-lg-5 col-md-3 col-sm-3"></div>
    </div>
  </div>
</template>
 
<style scoped>
  .btn-list {
    justify-content: center;
    gap: 50px;
  }
</style>