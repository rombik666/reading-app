<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  import DownBar from '../../entities/DownBar/DownBar.vue';
  import { editPointerItself } from '../../shared/store/pointer.js';

  const content = ref("");

  const postBook = () => {
    axios.post('/api/books', {
      content: content.value,
    })
    .then(response => {
      editPointerItself(response);
    })
    .catch(error => {
      console.log(error);
      console.log('this is a mistake motherfucker!');
    })
  }

</script>
 
<template>
 <div class="paste-form">
  <textarea v-model="content" class="text-input" name="text" placeholder="Write or paste the text..."></textarea>
  <DownBar @action="postBook"/>
 </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  @import '../../shared/styles/form.scss';

  .paste-form {
    display: flex;
    flex-direction: column;
    background-color: $background;
    padding: 20px 20px 0 20px;

    @extend %form;
  }
  .text-input {
    width: 100%;
    height: 100%;
    margin-right: 20px;
    color: $text;
    resize: none;
    outline: none;
    @extend %title;
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