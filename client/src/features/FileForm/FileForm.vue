<script setup>
  import DragDrop from '../../entities/DragDrop/DragDrop.vue';
  import { settings } from '../../shared/store/settings';
  function onCheckFile(e) {
    console.log(e);
  }
  function onVON(e) {
    console.log(e.target.files);
  }
</script>
 
<template>
 <div :class="settings.theme" class="file-form">
  <DragDrop @file-dropped="onCheckFile">
    <input class="file-input" type="file" name="file" id="form-file" @change="onVON"> 
    <label class="label" for="form-file" >
      <div class="content">
        <div class="image">
          <img src="./assets/file.svg" alt="files">
        </div>
        <div class="subtitle">
          <span class="first">
            Drag the file here or select manually
          </span>
          <span class="second">
            doc, docx, pdf, txt and others up to 5MB in size
          </span>
        </div>
      </div>
    </label>
  </DragDrop>
 </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/form.scss';
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  .file-form {
    background-color: $background;
    border-radius: 30px;
    padding: 10px;
    @extend %form;
  }
  .file-input {
    display: none;
  }
  .label {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 30px;
    border: 1px dashed $placeholder;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .content {
    width: 244px;
    text-align: center;
    color: $main;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .first {
      @extend %title;
    }
    .second {
      color: $main-light;
      @extend %middle-text;
    }
  }





  // dark theme
  .file-form.dark {
    background-color: $background_dark;
    .content {
      color: $main_dark;
      .second {
        color: $main-light_dark;
      }
    }
    .label {
      border: 1px dashed $placeholder_dark;
    }
  }

  // pink theme
  .file-form.pink {
    background-color: $background_pink;
    .content {
      color: $main_pink;
      .second {
        color: $main-light_pink;
      }
    }
    .label {
      border: 1px dashed $placeholder_pink;
    }
  }

  // light theme
  .file-form.light {
    background-color: $background_light;
    .content {
      color: $main_lig;
      .second {
        color: $main-light_light;
      }
    }
    .label {
      border: 1px dashed $placeholder_light;
    }
  }

  

</style>