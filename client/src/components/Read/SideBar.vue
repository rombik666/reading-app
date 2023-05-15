<script setup>
  import { window } from './statement.js'
  console.log(window);

</script>
 
<template>
  <Window />
  <div class="wrapp container-fluid bg-body ">
    <div class="row">
      <div class="col">
        <Text @click="window.value = !window.value" />
      </div>
    </div> 
    <div class="row">
      <div class="col">
        <Map />
      </div>
    </div>
  </div>
</template>
 
<style scoped>
  .wrapp {
    padding: 20px;
  }
</style>