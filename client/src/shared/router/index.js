import { createRouter, createWebHistory } from "vue-router";

import PasteForm from '../../features/PasteForm/PasteForm.vue';
import FileForm from '../../features/FileForm/FileForm.vue';
import LibForm from '../../features/LibForm/LibForm.vue';
import SetForm from '../../features/SetForm/SetForm.vue';
import PlayForm from '../../features/PlayForm/PlayForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'paste',
      component: PasteForm,
    },
    {
      path: '/file',
      name: 'file',
      component: FileForm,
    },
    {
      path: '/lib',
      name: 'lib',
      component: LibForm,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SetForm,
    },
    {
      path: '/play',
      name: 'play',
      component: PlayForm,
    }
  ]
})

export default router;