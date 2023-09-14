<script setup>
  import { speed } from '../../store/speed';
</script>

<template>  
  <input class="scroll" v-model="speed" type="range" min="100" max="500" name="speed" id="">
</template>
 
<style lang="scss" scoped>
  @import '../../styles/colors.scss';
  .scroll {
    width: 200px;
    appearance: none;
    &::-webkit-slider-runnable-track {
      border-radius: 30px;
      height: 8px;
      background-color: $main;
      border: 1px solid $rest;
    }
    &::-webkit-slider-thumb {
      background-color: $main;

      border: 1px solid $rest;
      border-radius: 30px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin-top: -11px;
      -webkit-appearance: none;
    }
    &::-moz-range-track {
    	border-radius: 10px/100%;
        height: 5px;
    	border: 1px solid cyan;
    	background-color: #fff;
    }
    &::-moz-range-thumb {
    	background: #ecf0f1;
    	border: 1px solid cyan;
        border-radius: 10px/100%;
    	cursor: pointer;
    }
  }
</style>