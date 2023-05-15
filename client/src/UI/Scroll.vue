<script setup>
  import { ref } from 'vue'

  const emit = defineEmits(['getScroll'])
  const props = defineProps(['state'])

  const val = ref(20);

  function onChange() {
    emit('getScroll', val)
  }


 
</script>
 
<template>
  <div class="scroll">
    <input :disabled="props.state" @change="onChange"  type="range" class="form-range" id="customRange1" v-model="val" >
  </div>
</template>
 
<style scoped>
  .scroll {
    width: 300px;
    margin: 0 auto;
  }
  .scroll input {
    transform: rotate(180deg);
  }
</style>