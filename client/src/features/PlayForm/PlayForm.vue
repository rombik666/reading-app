<script setup>
  import PlayBtn from '../../shared/ui/PlayBtn/PlayBtn.vue';
  import StopBtn from '../../shared/ui/StopBtn/StopBtn.vue'
  import Scroll from '../../shared/ui/Scroll/Scroll.vue';
  import WordBtn from '../../entities/WordBtn/WordBtn.vue';

  import { ref, watch } from 'vue';

  import { pointer_exists, pointer_array, pointer_ptr } from '../../shared/store/pointer.js';
  import { speed } from '../../shared/store/speed.js';
  import { startFraming, stopFraming } from '../../shared/algorithms/play';
  import { settings } from '../../shared/store/settings';
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
  <div v-if="pointer_exists" :class="settings.theme" class="play-form">
    <div :class="{active: !is_playing}" class="play-text">
      <WordBtn v-for="(word, i) in pointer_array" :key="i" :index="i">
        {{ word }}&#32;
      </WordBtn>
    </div>
      <div :class="{active: is_playing}" :style="{color: settings.color, fontFamily: settings.font, fontSize: settings.size + 'px'}" class="play-display">
      <span>{{ pointer_ptr }}</span>
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
  <div v-else :class="settings.theme" class="play-empty">
    <div>
      <h1>Плеер пуст</h1>
      <p>Загрузите текст или выберите из библиотеки</p>
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
  .play-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $background;
    div {
      max-width: 400px;
      width: 100%;
      text-align: center;
      color: $main;
      h1 {
        margin-bottom: 13px;
        @extend %large-text;
      }
      p {
        @extend %middle-text;
      }
    }
    @extend %form;
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



  // dark theme
  .play-form.dark {
    background-color: $background_dark;
    .play-text {
      color: $text_dark;
    }
    .play-text.active {
    }
    .play-display {
      color: $text_dark;
    }
  }
  
  .play-empty.dark {
    background-color: $background_dark;
    div {
      color: $main_dark;
    }
  }

  // pink theme
  .play-form.pink {
    background-color: $background_pink;
    .play-text {
      color: $text_pink;
    }
    .play-text.active {
    }
    .play-display {
      color: $text_pink;
    }
  }
  
  .play-empty.pink {
    background-color: $background_pink;
    div {
      color: $main_pink;
    }
  }

  // light theme
  .play-form.light {
    background-color: $background_light;
    .play-text {
      color: $text_light;
    }
    .play-text.active {
    }
    .play-display {
      color: $text_light;
    }
    .scroll-group {
      color: $text_light;
    }
  }
  
  .play-empty.light {
    background-color: $background_light;
    div {
      color: $main_lig;
    }
  }

  
</style>