
<template>
  <button class="action-button">
    <slot></slot>
  </button>
</template>
 
<style lang="scss" scoped>
  $button-bcg: #39507A;
  $button-col: white;
  .action-button {
    background-color: $button-bcg;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: $button-col;
    padding: 10px 18px;
    border-radius: 30px;
  }
</style>