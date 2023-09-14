<script setup>
  import SendBtn from '../../shared/ui/SendBtn/SendBtn.vue'
</script>
 
<template>
 <div class="downbar">
    <SendBtn />
  </div>
</template>
 
<style scoped>
  .downbar {
    flex: 1 0 auto;
    height: 68px;
    display: flex;
    padding: 10px;
    justify-content: flex-end;
  }
</style>