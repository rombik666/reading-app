<script setup>
  import { ref } from 'vue';
  import axios from '../../shared/axios/axios.js';

  import DownBar from '../../entities/DownBar/DownBar.vue';
  import { editPointerItself } from '../../shared/store/pointer.js';
  import { settings } from '../../shared/store/settings';

  const content = ref("");

  const postBook = () => {
    axios.post('/api/books', {
      content: content.value,
    })
    .then(response => {
      editPointerItself(response.data);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

</script>
 
<template>
 <div :class="settings.theme" class="paste-form">
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
  }


  // dark theme
  .paste-form.dark {
    background-color: $background_dark;
    .text-input {
      color: $text_dark;
      &::placeholder {
        color: $placeholder_dark;
      }
    }
  }
  

  // pink theme
  .paste-form.pink {
    background-color: $background_pink;
    .text-input {
      color: $text_pink;
      &::placeholder {
        color: $placeholder_pink;
      }
    }
  }
  

  // light theme
  .paste-form.light {
    background-color: $background_light;
    .text-input {
      color: $text_light;
      &::placeholder {
        color: $placeholder_light;
      }
    }
  }
  

</style>