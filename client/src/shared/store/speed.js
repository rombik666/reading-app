
import { ref } from "vue";

export const speed = ref(1000);

export const changeSpeed = (new_speed) => {
  speed.value = new_speed;
}

