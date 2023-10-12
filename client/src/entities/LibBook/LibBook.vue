<script setup>
  import { book, changeBookItself } from '../../shared/store/book.js';
  import { settings } from '../../shared/store/settings'

  const props = defineProps(['book_itself']);
  
  const theBookClicked = () => {
    changeBookItself(props.book_itself);
  }
</script>
 
<template>
  <div class="book" :class="{
    active: props.book_itself._id == book._id ? true : false,
    dark: settings.theme == 'dark',
    pink: settings.theme == 'pink',
    light: settings.theme == 'light',
  }" @click="theBookClicked()"> 
    <h4>{{ props.book_itself.title }}</h4>
    <p>
      {{ props.book_itself.content }}
    </p>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  .book {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $text;
    border-bottom: 1px solid $rest;
    padding: 10px;
    @extend %small-text;
    h4, p {
      display: -webkit-box;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
    h4 {
      -webkit-line-clamp: 1;
      margin-bottom: 5px;
      font-size: 20px;
    }
    p {
      -webkit-line-clamp: 3;
      opacity: .5;
    }
    &.active {
      background-color: $main;
    }
    &:last-child {
      border-radius: 0 0 0 30px;
    }
    &:first-child {
      border-radius: 30px 0 0 0;
    }
    
  }

  // dark theme
  .book.dark {
    color: $text_dark;
    border-bottom: 1px solid $rest_dark;
    &.active {
      background-color: $main_dark;
    }
  }

  // pink theme
  .book.pink {
    color: $text_pink;
    border-bottom: 1px solid $rest_pink;
    &.active {
      background-color: $main_pink;
    }
  }

  // light theme
  .book.light {
    color: $text_light;
    border-bottom: 1px solid $rest_light;
    &.active {
      background-color: $rest_light;
    }
  }
</style>