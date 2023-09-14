<script setup>
  import { defineProps } from 'vue';
  import { changeBookWordnum, getWordnum } from '../../shared/store/book';

  const props = defineProps(['index']);

  

</script>
 
<template>
  <span class="word-btn" @click="changeBookWordnum(props.index)" :class="{active: props.index == getWordnum() ? true : false}">
    <slot></slot>&nbsp;
  </span>
</template>
 
<style scoped>
  .word-btn {
    display: inline;
    line-height: 40px;
    transition: color .3s ease;
  }
  .word-btn.active {
    color: red;
  }
</style>