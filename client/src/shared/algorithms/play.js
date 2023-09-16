
import { pointer, pointer_array, incPointerWordnumb, editPointerWordnumb } from '../store/pointer.js';

let process;

export const startFraming = (speed) => {
  process = setInterval(() => {
    if (pointer.wordnumb <= (pointer_array.value.length - 2)) {
      incPointerWordnumb();
    } else {
      editPointerWordnumb(0);
    }
    console.log('It is playing!!!');
  }, speed);
}

export function stopFraming() {
  clearInterval(process);
  console.log('It has been stopped playing!!!')
}