<script setup>
  import { window } from '../components/Read/statement';
  import { cur_text } from '../components/Read/statement';
  import { ref } from 'vue';

  const message = ref("");

  function reset() {
    window.value = !window.value;
    message.value = "";
  }

  function sendText() {
    cur_text.value = message.value;
    console.log(message.value)
    window.value = !window.value;
  }

</script>
 
<template>
  <div class="window" :class="{visible: window.value}">
    <div class="window__content">
      
      <div class="cancel" @click="reset">
        <img src="../assets/img/cancel.svg" alt="">
      </div>
      <textarea class="window__input" v-model="message"></textarea>
      <div class="window__btn">
        <OkBtn @click="sendText">OK</OkBtn>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
  .visible {
    display: block !important;
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