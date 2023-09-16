<script setup>
  import SendBtn from '../../shared/ui/SendBtn/SendBtn.vue'

  const emit = defineEmits(['action']);

  const makeEventHappen = () => {
    emit('action');
  }
</script>
 
<template>
 <div class="downbar">
    <SendBtn  @click="makeEventHappen" />
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