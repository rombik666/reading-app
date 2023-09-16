<script setup>
  import { book, changeBookItself } from '../../shared/store/book.js';

  const props = defineProps(['book_itself']);
  
  const theBookClicked = () => {
    changeBookItself(props.book_itself);
  }
</script>
 
<template>
  <div class="book" :class="{active: props.book_itself._id == book._id ? true : false}" @click="theBookClicked()"> 
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
</style>