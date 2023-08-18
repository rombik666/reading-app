<script>
  export default {
    data() {
      return {
        value: '',
        books: [
          {
            title: '',
            content: '',
          }
        ]
      }
    },
  }
</script>
 
<template>
  <div class="lib-form">
    <div class="sidebar">
      <div class="list">
        <div class="book">
          <h4></h4>
          <div></div>
        </div>
      </div>
    </div>
    <div class="main">
      <input type="text" v-model="value" class="title-input">
      <div class="text-block"></div>
      <div class="downbar">
        
      </div>
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';
  @import '../../shared/styles/form.scss';

  .lib-form {
    @extend %form;
  }
  
</style>