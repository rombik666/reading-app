<script setup>
  import LibText from '../../entities/LibText/LibText.vue';
  import LibBook from '../../entities/LibBook/LibBook.vue';
  import DownBar from '../../entities/DownBar/DownBar.vue';
  import { ref, watch, onMounted } from 'vue';
  import ActionBtn from '../../entities/ActionBtn/ActionBtn.vue';

  import { book, changeBookTitle } from '../../shared/store/book.js';
  import { editPointerItself } from '../../shared/store/pointer';


  import axios from '../../shared/axios/axios.js';

  const books = ref([]);

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
    
    axios.put('/api/books', {
      ...book,
      title: saving_title.value,
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));

    saving_title.value = "";
    save_btn_is_active.value = false;

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
    @extend %custom-scroll;
    

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

  .list-label {
    padding: 20px 0 0 20px;
    color: $main;
    @extend %middle-text;
  }

  @media (min-width: 1600px) {
    .sidebar {
      flex: 0 0 300px;
    }
  }
</style>