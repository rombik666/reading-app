import { createApp, toDisplayString } from 'vue'
import App from './App.vue'
import Play from './UI/Play.vue'
import Prev from './UI/Prev.vue'
import Next from './UI/Next.vue'
import OkBtn from './UI/OkBtn.vue'
import ReadPage from './components/Read/ReadPage.vue'
import NavBar from './components/Read/NavBar.vue'
import SideBar from './components/Read/SideBar.vue'
import Display from './components/Read/Display.vue'
import Word from './components/Read/Word.vue'
import Text from './UI/Text.vue'
import Map from './UI/Map.vue'
import Scroll from './UI/Scroll.vue'
import Window from './UI/Window.vue'


const app = createApp(App)

app
  .component('ReadPage', ReadPage)
  .component('NavBar', NavBar)
  .component('SideBar', SideBar)
  .component('Display', Display)
  .component('Word', Word)
  .component('Play', Play)
  .component('Prev', Prev)
  .component('Next', Next)
  .component('OkBtn', OkBtn)
  .component('Text', Text)
  .component('Map', Map)
  .component('Scroll', Scroll)
  .component('Window', Window)


app.mount('#app')
