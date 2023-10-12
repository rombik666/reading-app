<script setup>
  import { settings } from '../../store/settings';
</script>
 
<template>
  <button :class="settings.theme" class="play-btn"></button>
</template>
 
<style lang="scss" scoped>
  .play-btn {
    width: 60px;
    height: 60px;
    background-image: url('./assets/play.svg');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    transition: all ease .3s;
    &.pink {
      background-image: url('./assets/play_pink.svg');
    }
  }
  .play-btn:hover {
    background-image: url('./assets/play_hover.svg');
  }
</style>