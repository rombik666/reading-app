import { createRouter, createWebHistory } from "vue-router";

import PasteForm from '../../features/PasteForm/PasteForm.vue';
import FileForm from '../../features/FileForm/FileForm.vue';
import LibForm from '../../features/LibForm/LibForm.vue';
import SetForm from '../../features/SetForm/SetForm.vue';
import PlayForm from '../../features/PlayForm/PlayForm.vue';
import RegForm from '../../features/RegForm/RegForm.vue';
import LoginForm from '../../features/LoginForm/LoginForm.vue';
import LogoutBtn from '../../features/LogoutBtn/LogoutBtn.vue'

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
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegForm,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutBtn,
    }
  ]
})

export default router;