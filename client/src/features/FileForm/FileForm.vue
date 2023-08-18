<script setup>
  import DragDrop from '../../entities/DragDrop/DragDrop.vue';

  function onCheckFile(e) {
    console.log(e);
  }
  function onVON(e) {
    console.log(e.target.files);
  }
</script>
 
<template>
 <div class="file-form">
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
  }
  .content {
    width: 244px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 135px auto 0 auto;
    text-align: center;
    color: $main;
    .first {
      @extend %title;
    }
    .second {
      color: $main-light;
      @extend %middle-text;
    }
  }



</style>