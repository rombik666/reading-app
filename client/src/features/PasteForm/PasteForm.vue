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

  .paste-form {
    position: relative;
    width: 680px;
    height: 430px;
    border-radius: 30px;
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
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    background-color: $background;
    border-radius: 0 0 30px 30px;
  }
  .submit {
    width: 40px;
    height: 40px;
    background-image: url('./assets/btn.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

</style>