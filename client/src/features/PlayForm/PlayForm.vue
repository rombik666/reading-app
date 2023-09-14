<script setup>
  import PlayBtn from '../../shared/ui/PlayBtn/PlayBtn.vue';
  import StopBtn from '../../shared/ui/StopBtn/StopBtn.vue'
  import Scroll from '../../shared/ui/Scroll/Scroll.vue';
  import WordBtn from '../../entities/WordBtn/WordBtn.vue';

  import { ref, watch } from 'vue';

  import { book, book_array, book_ptr } from '../../shared/store/book.js';
  import { speed } from '../../shared/store/speed.js';
  import { startFraming, stopFraming } from '../../shared/algorithms/play';

  const is_playing = ref(false);

  const managePlayer = () => {
    if (is_playing.value) {
      stopFraming();
      is_playing.value = false;
    } else {
      startFraming(60000 / speed.value);
      is_playing.value = true;
    }
  }

  watch(speed, () => {
    if (is_playing.value) {
      stopFraming();
      startFraming(60000 / speed.value);
    }
  })
  
</script>
 
<template>
  <div class="play-form">
    <div :class="{active: !is_playing}" class="play-text">
      <WordBtn v-for="(word, i) in book_array" :key="i" :index="i">
        {{ word }}&#32;
      </WordBtn>
    </div>
    <div :class="{active: is_playing}" class="play-display">
      <span>{{ book_ptr }}</span>
    </div>
    <div class="play-operations">
      <PlayBtn v-if="!is_playing" @click="managePlayer" />
      <StopBtn v-else @click="managePlayer" />
      <div class="scroll-group">
        <span>{{ speed }}</span>
        <Scroll />
      </div>
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/form.scss';
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  .play-form {
    background-color: $background;
    padding: 20px;
    display: flex;
    flex-direction: column;
    @extend %form;
  }
  .play-text {
    display: none;
    overflow-y: scroll;
    height: 100%;
    color: $text;
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
    @extend %middle-text;
  }
  .play-text.active {
    display: block;
  }
  .play-display {
    color: $text;
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    @extend %play-text;
  }
  .play-display.active {
    display: flex;
  }
  .play-operations {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .scroll-group {
    font-size: 15px;
    color: #FFF;
    display: flex;
    gap: 20px;
  }
  
</style>