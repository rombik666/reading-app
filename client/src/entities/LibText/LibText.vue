<script setup>
  const props = defineProps(['content']);
</script>
 
<template>
  <div class="lib-text">
    {{ props.content }}
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  .lib-text {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    color: $text;
    line-height: 30px;
    @extend %middle-text;
    &::placeholder {
      color: $placeholder;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: $scroll-bcg;        /* цвет зоны отслеживания */
    }

    &::-webkit-scrollbar-thumb {
      background-color: $main;    /* цвет бегунка */
      border-radius: 10px;       /* округлось бегунка */
      border: none;  /* отступ вокруг бегунка */
    }
  }
</style>