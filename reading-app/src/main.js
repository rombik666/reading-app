import { createApp } from 'vue'
import App from './App.vue'
import Play from './UI/Play.vue'
import Prev from './UI/Prev.vue'
import Next from './UI/Next.vue'
import OkBtn from './UI/OkBtn.vue'

const app = createApp(App)

app
  .component('Play', Play)
  .component('Prev', Prev)
  .component('Next', Next)
  .component('OkBtn', OkBtn)


app.mount('#app')
