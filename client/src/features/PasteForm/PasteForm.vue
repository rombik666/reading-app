<script>

</script>
 
<template>
 <div class="paste-form">
  <textarea class="text-input" name="text" id="" cols="30" rows="10" placeholder="Write or paste the text..."></textarea>
  <div class="downbar">
    <button class="submit"></button>
  </div>
 </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  @import '../../shared/styles/form.scss';

  .paste-form {
    @extend %form;
  }
  .text-input {
    width: 100%;
    height: 100%;
    background-color: $background;
    padding: 20px 20px 80px 20px;
    border-radius: 30px;
    color: $text;
    resize: none;
    outline: none;
    @extend %title;
    &::placeholder {
      color: $placeholder;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .downbar {
    background-color: $background;
    @extend %downbar;
  }
  .submit {
    @extend %submit;
  }

</style>