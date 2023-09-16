<script setup>
  import LibText from '../../entities/LibText/LibText.vue';
  import LibBook from '../../entities/LibBook/LibBook.vue';
  import DownBar from '../../entities/DownBar/DownBar.vue';
  import { ref, watch, onMounted } from 'vue';
  import ActionBtn from '../../entities/ActionBtn/ActionBtn.vue';

  import { book, changeBookTitle } from '../../shared/store/book.js';
  import { pointer, editPointerItself } from '../../shared/store/pointer';


  import axios from '../../shared/axios/axios.js';

  const books = ref([
    {
      title: 'Mark Zucc',
      content: 'This is a story about Mark Zucc, one of the most famous billionares in the world',
      _id: 1,
      wordnumb: 0,
    },
    {
      title: 'This is Elon Musk',
      content: 'This is a story about Elon Musk, one of the most famous billionares in the world',
      _id: 2,
      wordnumb: 0,
    },

  ]);

  onMounted(() => {
    axios.get('/api/books')
    .then(response => {
      books.value = response.data;
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  })

  const saving_title = ref("");
  const save_btn_is_active = ref(false);

  watch(book, () => {
    saving_title.value = book.title;
    save_btn_is_active.value = false;
    console.log('watch happened')
  })

  const theTitleChanging = (e) => {
    save_btn_is_active.value = true;
    saving_title.value = e.target.value;
  }
  const theTitleChanged = () => {
    changeBookTitle(saving_title.value);

    saving_title.value = "";
    save_btn_is_active.value = false;

    // axios.put('/api/books') // здесь нужно реализовать пут запрос на изменение тайтла

    books.value.map(tbook => {
      if (tbook._id === book._id) {
        tbook.title = book.title;
        return tbook;
      }
    })
  }
  const sendBook = () => {
    editPointerItself(book);
  }
  
  

</script>
 
<template>
  <div class="lib-form">
    <div class="sidebar">
      <div class="list">
        <div v-if="books.length == 0" class="list-label">Библиотека пуста</div>
        <LibBook v-else v-for="book in books" :key="book._id" :book_itself="book" />
      </div>
    </div>
    <div v-if="books.length == 0" class="main-empty">

    </div>
    <div v-else-if="!book.exist" class="main-nonchosen">
      <h1>Выберите книгу</h1>
    </div>
    <div v-else class="main">
      <input class="title-input" type="text" placeholder="Write title" @input="theTitleChanging" :value="saving_title" />
      <LibText :content="book.content" />
      <div class="down-group">
        <ActionBtn v-if="save_btn_is_active" @click="theTitleChanged()" class="actionBtn">Save</ActionBtn>
        <DownBar @action="sendBook" />
      </div>
    </div>
    
    
    
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/form.scss';
  @import '../../shared/styles/typo.scss';
  .lib-form {
    background-color: $background;
    display: flex;
    @extend %form;
  }
  .sidebar {
    flex: 0 0 220px;
    height: 100%;
    border-right: 1px solid $rest;
  }
  .list {
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;               /* ширина всей полосы прокрутки */
    }

    &::-webkit-scrollbar-track {
      background: $scroll-bcg;        /* цвет зоны отслеживания */
    }

    &::-webkit-scrollbar-thumb {
      background-color: $main;    /* цвет бегунка */
      border-radius: 20px;       /* округлось бегунка */
      border: none;  /* отступ вокруг бегунка */
    }
    

  }
  .title-input {
      margin-bottom: 20px;
      color: $text;
      @extend %large-text;
      &::placeholder {
        color: $placeholder;
      }
  }
  .main, .main-nonchosen, .main-empty {
    width: 100%;
    height: 100%;
    padding: 19px 33px 0 13px;
    display: flex;
    flex-direction: column;
  }
  .main-nonchosen {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 40px 0;
    h1 {
      color: $main;
      @extend %large-text;
    }
  }
  
  .down-group {
    display: flex;
    align-items: center;
  }
</style>