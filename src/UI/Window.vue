<script setup>
  import { ref } from 'vue'

  const props = defineProps(['onOff']);

  const isVisible = ref(props.onOff.value);
  console.log(isVisible.value);

  const window_text = ref('');
</script>
 
<template>
  <div class="window" :class="{visible: isVisible}">
    <div class="window__content">
      
      <div class="cancel" @click="turn">
        <img src="../assets/img/cancel.svg" alt="">
      </div>
      <textarea class="window__input" v-model="window_text"></textarea>
      <div class="window__btn">
        <OkBtn>OK</OkBtn>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
  .visible {
    display: block;
  }
  .window {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  .window__content {
    position: relative;
    width: 800px;
    height: 500px;
    border: 1px solid #FCA311;
    border-radius: 20px;
    background-color: #14213D;
    z-index: 34;
  }
  .window__input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-family: 'PT Sans';
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    border: none;
    padding: 5px;
    resize: none;
    border-radius: 20px;
    padding: 20px;
  }
  .window__btn {
    display: flex;
    justify-content: end;
  }
  .cancel {
    position: absolute;
    left: -60px;
    top: 20px;
  }
</style>