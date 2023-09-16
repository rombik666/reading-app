
import { ref } from "vue";

export const speed = ref(200);

export const changeSpeed = (new_speed) => {
  speed.value = new_speed;
}

