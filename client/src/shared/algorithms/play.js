
import { book, book_array, incBookWordnum, changeBookWordnum } from '../store/book.js';

let process;

export const startFraming = (speed) => {
  process = setInterval(() => {
    if (book.wordnum <= (book_array.value.length - 2)) {
      incBookWordnum();
    } else {
      changeBookWordnum(0);
    }
    console.log('It is playing!!!');
  }, speed);
}

export function stopFraming() {
  clearInterval(process);
  console.log('It has been stopped playing!!!')
}