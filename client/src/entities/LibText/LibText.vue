<script setup>
  import { settings } from '../../shared/store/settings'
  const props = defineProps(['content']);
</script>
 
<template>
  <div :class="settings.theme" class="lib-text">
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
    word-break: break-all;
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




  // dark theme
  .lib-text.dark {
    color: $text_dark;
    &::placeholder {
      color: $placeholder_dark;
    }
    &::-webkit-scrollbar-track {
      background: $scroll-bcg_dark;        /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: $main_dark;    /* цвет бегунка */
    }
  }

  // pink theme
  .lib-text.pink {
    color: $text_pink;
    &::placeholder {
      color: $placeholder_pink;
    }
    &::-webkit-scrollbar-track {
      background: $scroll-bcg_pink;        /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: $main_pink;    /* цвет бегунка */
    }
  }

   // light theme
  .lib-text.light {
    color: $text_light;
    &::placeholder {
      color: $placeholder_light;
    }
    &::-webkit-scrollbar-track {
      background: $scroll-bcg_light;        /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: $main_light;    /* цвет бегунка */
    }
  }
</style>