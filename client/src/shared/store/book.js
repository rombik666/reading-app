import { reactive, computed } from 'vue';

export const book = reactive({
  title: "",
  content: "",
  _id: null,
  wordnum: 0,
})

export const book_array = computed(() => {
  return book.content.split(' ');
})

export const book_ptr = computed(() => {
  return book_array.value[book.wordnum];
})

export const getWordnum = () => {
  return book.wordnum;
}

export const changeBookItself = (new_book) => {
  book.title = new_book.title;
  book.content = new_book.content;
  book._id = new_book._id;
  book.wordptr = new_book.wordptr;
}
export const changeBookTitle = (new_title) => {
  book.title = new_title;
}
export const changeBookWordnum = (new_wordnum) => {
  book.wordnum = new_wordnum;
}
export const incBookWordnum = () => {
  book.wordnum++;
  console.log(book.wordnum);
}