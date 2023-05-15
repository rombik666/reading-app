<script setup>

</script>
 
<template>
  <div class="map"></div>
</template>
 
<style scoped>
  .map {
    width: 40px;
    height: 40px;
    background-image: url('../assets/img/map.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform .3s ease;
    padding: 10px;
  }
  .map:hover {
    transform: rotate(180deg);
  }
</style>