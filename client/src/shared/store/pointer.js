import { reactive, computed } from 'vue';

export const pointer = reactive({
  content: "",
  wordnumb: 0,
  exist: false,
});

export const pointer_array = computed(() => {
  return pointer.content.split(' ');
})

export const pointer_ptr = computed(() => {
  return pointer_array.value[pointer.wordnumb];
})

export const pointer_exists = computed(() => {
  return pointer.exist;
})

export const editPointerItself = (new_pointer) => {
  pointer.content = new_pointer.content;
  pointer.wordnumb = new_pointer.wordnumb;
  pointer.exist = true;
}
export const editPointerWordnumb = (new_wordnumb) => {
  pointer.wordnumb = new_wordnumb;
}
export const incPointerWordnumb = () => {
  pointer.wordnumb++;
}
export const getWordnumb = () => {
  return pointer.wordnumb;
}

