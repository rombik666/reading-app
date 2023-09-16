import { reactive } from 'vue';

export const book = reactive({
  title: "",
  content: "",
  _id: null,
  wordnumb: 0,
  exist: false,
})



export const changeBookItself = (new_book) => {
  book.title = new_book.title;
  book.content = new_book.content;
  book._id = new_book._id;
  book.wordnumb = new_book.wordnumb;
  book.exist = true;
}

export const changeBookTitle = (new_title) => {
  book.title = new_title;
}