<script setup>
  import axios from '../../shared/axios/axios';
  import { ref } from 'vue';
  import ActionBtn from '../../entities/ActionBtn/ActionBtn.vue';
  import { settings, setSettings, setToDefault } from '../../shared/store/settings';
  const font_is_active = ref(false);
  const size_is_active = ref(false);

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
  ];
  const theme_values = [
    'default',
    'dark',
    'pink',
    'light'
  ]

  
  const toggleFont = () => {
    size_is_active.value = false;
    font_is_active.value = !font_is_active.value;
  }
  const toggleSize = () => {
    font_is_active.value = false;
    size_is_active.value = !size_is_active.value;
  }

  const changeFont = (value) => {
    setSettings({
      ...settings.value,
      font: value,
    })
  }
  const changeSize = (value) => {
    setSettings({
      ...settings.value,
      size: value,
    })
  }
  const changeTheme = (mode) => {
    setSettings({
      ...settings.value,
      theme: mode,
    })
  }

  const saveSettings = () => {
    axios.put('/api/settings', settings.value)
    .then(response => console.log(response))
    .catch(error => {
      console.log(error);
    })
  }
  const resetSettings = () => {
    setToDefault();
    axios.put('/api/settings', settings.value);
  }

</script>
 
<template>
  <div :class="settings.theme" class="set-form">
    <div class="select" :class="{selected: font_is_active}" @click="toggleFont">
      <div class="select-content">
        <h1>Font style</h1>
        <div class="arrow">
          <span>{{ settings.font }}</span>
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
          <span>{{ settings.size }}</span>
          <img src="./assets/arrow.svg" alt="">
        </div>
      </div>
      <ul v-if="size_is_active" class="select-list">
        <li v-for="value in size_values" :key="value" @click="changeSize(value)">{{ value }}</li>
      </ul>
    </div>
    <label class="color" for="color-form">
      <h1>Text color</h1>
      <input v-model="settings.color" type="color" name="color" id="color-form">
    </label>

    <div class="theme">
      <ul class="theme-items">
        <li v-for="value in theme_values" :class="{active: settings.theme == value ? true : false}" @click="changeTheme(value)" :id="value" :key="value"></li>
      </ul>
    </div>
    <div class="action-group">
      <ActionBtn @click="resetSettings">Reset</ActionBtn>
      <ActionBtn @click="saveSettings">Save</ActionBtn> 
    </div>
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
    color: $text;
    background: $rest;              
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
    color: $text;
    background: $rest;        
    @extend %set-item;
    @extend %middle-text;
  }
  .theme {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: transparent;
  }
  .theme-items {
    color: $text;
    background: $rest;        
    @extend %set-item;
    @extend %middle-text;
    width: fit-content;
    gap: 20px;
    li {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid $text;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: border .2s ease-in-out;
    }
    li.active {
      border: 6px solid gold;
    }
    #default {
      background-image: url('./assets/darkblue_theme.svg');
    }
    #dark {
      background-image: url('./assets/dark_theme.svg');
    }
    #pink {
      background-image: url('./assets/pink_theme.svg');
    }
    #light {
      background-image: url('./assets/black&white_theme.svg');
    }
  }
  .action-group {
    display: flex;
    gap: 13px;
  }



  // dark theme
  .set-form.dark {
    background-color: $background_dark;
    .label {
      color: $text_dark;
    }
    .select.selected {
      .select-content {
        background-color: $menu_dark;
      }
    }
    .select-content {
      color: $text_dark;
      background: $rest_dark;              
    }
    .select-list {
      color: $text_dark;
      li {
        background: $rest_dark;
        border-top: 1px solid $main-light_dark;
      }
      li.active {
        border: 6px solid gold;
      }
    }

    .color  {
      color: $text_dark;
      background: $rest_dark;        
    }
    .theme-items {
      color: $text_dark;
      background: $rest_dark;        
      li {
        border: 2px solid $text_dark;
      }
      li.active {
        border: 6px solid gold;
      }
    }

  }

  // pink theme
  .set-form.pink {
    background-color: $background_pink;
    .label {
      color: $text_pink;
    }
    .select.selected {
      .select-content {
        background-color: $menu_pink;
      }
    }
    .select-content {
      color: $text_pink;
      background: $rest_pink;              
    }
    .select-list {
      color: $text_pink;
      li {
        background: $rest_pink;
        border-top: 1px solid $main-light_pink;
      }
      li.active {
        border: 6px solid gold;
      }
    }

    .color  {
      color: $text_pink;
      background: $rest_pink;        
    }
    .theme-items {
      color: $text_pink;
      background: $rest_pink;        
      li {
        border: 2px solid $text_light;
      }
      li.active {
        border: 6px solid gold;
      }
    }
  }
  
  // light theme
  .set-form.light {
    background-color: $background_light;
    .label {
      color: $text_light;
    }
    .select.selected {
      .select-content {
        background-color: $menu_light;
      }
    }
    .select-content {
      color: $text_light;
      background: $rest_light;              
    }
    .select-list {
      color: $text_light;
      li {
        background: $rest_light;
        border-top: 1px solid $main-light_light;
      }
      li.active {
        border: 6px solid gold;
      }
    }

    .color  {
      color: $text_light;
      background: $rest_light;        
    }
    .theme-items {
      color: $text_light;
      background: $rest_light;        
      li {
        border: 2px solid $text_light;
      }
      li.active {
        border: 6px solid gold;
      }
    }
  }
  

</style>