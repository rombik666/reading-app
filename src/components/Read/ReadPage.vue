<script setup>
  import { onMounted } from 'vue';
 

</script>
 
<template>
  <body class="wrapper">
    <NavBar />
    <SideBar />
    <Display />
  </body>
</template>
 
<style scoped>
  .wrapper {
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, #14213D, #14213D),
  linear-gradient(0deg, #FCA311, #FCA311)
  }
</style>