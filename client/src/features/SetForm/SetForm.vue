<script setup>
  import { ref } from 'vue';
  import ActionBtn from '../../entities/ActionBtn/ActionBtn.vue';

  const fontFamily = ref('')
  const fontSize = ref('');
  const color = ref('#ffffff');
  const theme = ref('default');


</script>
 
<template>
  <div class="set-form">
    <div class="font">
      <label for="font-select">Font style</label>
      <select name="font-family" id="font-select" v-model="fontFamily">
        <option>Noto Sans</option>
        <option selected>Roboto</option>
        <option>Calibri</option>
        <option>Times</option>
      </select>
    </div>
    <div class="size">
      <label for="size-select">Text size</label>
      <select name="font-size" id="size-select" v-model="fontSize">
        <option>10px</option>
        <option>12px</option>
        <option>16px</option>
        <option>18px</option>
        <option>25px</option>
        <option>35px</option>
        <option>50px</option>
        <option selected>70px</option>
      </select>
    </div>
    <div class="color">
      <label for="color-select">Text color</label>
      <input type="color" name="color" id="color-select">
    </div>
    <div class="theme">
      <label>Theme</label>
      <div class="items">
        <div class="pink">
          <img src="./assets/pink_theme.svg" alt="">
        </div>
        <div class="dark">
          <img src="./assets/dark_theme.svg" alt="">
        </div>
        <div class="light">
          <img src="./assets/black&white_theme.svg" alt="">
        </div>
        <div class="default">
          <img src="./assets/darkblue_theme.svg" alt="">
        </div>
      </div>
    </div>
    <div class="button-group">
      <ActionBtn>Save</ActionBtn>
      <ActionBtn>Reset</ActionBtn>
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  @import '../../shared/styles/form.scss';

  select {
    color: $text;
    outline: none;
  }
  .set-form {
    background-color: $background;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 20px 15px 13px 15px;
    @extend %form;
    & > div:not(.button-group) {
      width: 100%;
      height: 50px;
      background-color: $rest;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 30px;
      padding: 0 25px;
      label {
        color: $text;
        @extend %middle-text;
        line-height: 23px;
      }
    }
  }

  .items {
    display: flex;
    gap: 5px;
    align-items: center;
    & > div {
      width: 30px;
      height: 30px;
    }
  }
  .button-group {
    width: 100%;
    gap: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

</style>