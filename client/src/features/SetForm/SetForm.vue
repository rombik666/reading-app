<script setup>
  import { ref } from 'vue';
  import ActionBtn from '../../entities/ActionBtn/ActionBtn.vue';

  const font_is_active = ref(false);
  const size_is_active = ref(false);

  const font = ref('Roboto')
  const size = ref('70');
  const color = ref('#ffffff');
  const theme = ref('default');

  const font_values = [
    'Noto Sans',
    'Roboto',
    'Calibri',
    'Times'
  ];
  const size_values = [
    '20',
    '30',
    '50',
    '70',
    '80',
    '100',
    '20',
    '30',
    '50',
    '70',
    '80',
    '100'
  ];

  const toggleFont = () => {
    size_is_active.value = false;
    font_is_active.value = !font_is_active.value;
  }
  const toggleSize = () => {
    font_is_active.value = false;
    size_is_active.value = !size_is_active.value;
  }

  const changeFont = (value) => {
    font.value = value;
  }
  const changeSize = (value) => {
    size.value = value;
  }

</script>
 
<template>
  <div class="set-form">
    <div class="select" :class="{selected: font_is_active}" @click="toggleFont">
      <div class="select-content">
        <h1>Font style</h1>
        <div class="arrow">
          <span>{{ font }}</span>
          <img src="./assets/arrow.svg" alt="">
        </div>
      </div>
      <ul v-if="font_is_active" class="select-list">
        <li v-for="value in font_values" :key="value" @click="changeFont(value)">{{ value }}</li>
      </ul>
    </div>
    <div class="select" :class="{selected: size_is_active}" @click="toggleSize">
      <div class="select-content">
        <h1>Text size</h1>
        <div class="arrow">
          <span>{{ size }}</span>
          <img src="./assets/arrow.svg" alt="">
        </div>
      </div>
      <ul v-if="size_is_active" class="select-list">
        <li v-for="value in size_values" :key="value" @click="changeSize(value)">{{ value }}</li>
      </ul>
    </div>
    <label class="color" for="color-form">
        <h1>Text color</h1>
        <input v-model="color" type="color" name="color" id="color-form">
      </label>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  @import '../../shared/styles/form.scss';
  @import '../../shared/styles/selects.scss';

  .set-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    background-color: $background;
    user-select: none;
    @extend %form;
    .label {
      color: $text;
      margin-bottom: 20px;
      @extend %title;
    }
  }
  .arrow {
    display: flex;
    gap: 20px;
    img {
      transition: all .3s ease;
    }
  }
  .select {
    position: relative;
  }
  .select.selected {
    .select-content {
      border-radius: 30px 30px 0 0;
      background-color: $menu;
    }
    .arrow {
      img {
        transform: rotate(90deg);
      }
    }
  }
  .select-content {
    @extend %set-item;
    @extend %middle-text;
  }
  .select-list {
    width: 100%;
    max-height: 300px;
    position: absolute;
    overflow-y: scroll;
    z-index: 10;
    top: 65px;
    left: 0;
    color: $text;
    @extend %custom-scroll;
    @extend %small-text;
    li {
      background: $rest;
      padding: 23px 20px;
      border-top: 1px solid $main-light;
    }
    li:last-child {
      border-radius: 0 0 30px 30px;
    }
  }
  
  .color  {
    @extend %set-item;
    @extend %middle-text;
  }

</style>