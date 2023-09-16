<script setup>
  import { defineProps } from 'vue';
  import { editPointerWordnumb, getWordnumb } from '../../shared/store/pointer.js';

  const props = defineProps(['index']);

  

</script>
 
<template>
  <span class="word-btn" @click="editPointerWordnumb(props.index)" :class="{active: props.index == getWordnumb() ? true : false}">
    <slot></slot>&nbsp;
  </span>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  .word-btn {
    display: inline;
    line-height: 40px;
    transition: color .3s ease;
  }
  .word-btn.active {
    color: $red;
  }
</style>