import { ref, computed } from "vue";

const default_settings = {
  font: 'Roboto',
  size: '70',
  color: '#ffffff',
  theme: 'default'
}

export const settings = ref({
  font: '',
  size: '',
  color: '',
  theme: '',
})

export const settings_styles = ref({
  fontFamily: computed(() => settings.value.font),
  fontSize: computed(() => settings.value.font),
  color: computed(() => settings.value.font),
})

export const setSettings = (new_settings) => {
  settings.value = new_settings;
}

export const setToDefault = () => {
  setSettings(default_settings);
}