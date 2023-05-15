<script setup>
 
</script>
 
<template>
  <button class="ok">
    <slot>

    </slot>
  </button>
</template>
 
<style scoped>
  .ok {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #14213D;
    border: 1px solid #FCA311;
    color: #FCA311;
    border-radius: 20px;
    font-size: 30px;
    font-weight: 400;
    line-height: 45px;
    transition: all .3s ease;
  }
  .ok:hover {
    background-color: #FCA311;
    color: #14213D;
  }
</style>