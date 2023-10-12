
<script setup>
  import { settings } from '../../shared/store/settings';
</script>

<template>
  <button :class="settings.theme" class="action-button">
    <slot></slot>
  </button>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  .action-button {
    background-color: $button-bcg;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: $button-col;
    padding: 10px 18px;
    border-radius: 30px;
    &.dark {
      background-color: $button-bcg_dark;
      color: $button-col_dark;
    }
    &.pink {
      background-color: $button-bcg_pink;
      color: $button-col_pink;
    }
    &.light {
      background-color: $button-bcg_light;
      color: $button-col_light;
    }
    
  }
</style>