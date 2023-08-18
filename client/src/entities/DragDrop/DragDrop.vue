<script setup>
  import { onMounted, onUnmounted } from 'vue';
  const emit = defineEmits('file-dropped');

  function onDrop(e) {
    emit('file-dropped', e.dataTransfer.files);
  }
  
  const events = ['drop', 'dragenter', 'dragover', 'dragleave'];

  onMounted(() => {
    events.forEach(event => {
      document.body.addEventListener(event, (e) => {
        e.preventDefault();
      })
    })
  })
  onUnmounted(() => {
    events.forEach(event => {
      document.body.removeEventListener(event, (e) => {
        e.preventDefault();
      })
    })
  })
  

</script>
 
<template>
  <div class="dragdrop" @drop.prevent="onDrop" >
    <slot></slot>
  </div>
</template>
 
<style scoped>
  .dragdrop {
    width: 100%;
    height: 100%;
  }
</style>