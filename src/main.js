import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vwave from 'v-wave'
import dbPromise from '/db';

const app = createApp(App)

app.config.globalProperties.$db = dbPromise;

app.use(AOS.init({
    once:true,
}))
app.use(Vwave)
app.use(router)
app.mount('#app')
