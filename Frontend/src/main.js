import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"

import Modal from './components/Modal.vue'

const app = createApp(App)

app.component("Modal", Modal);

app.use(createPinia())
app.use(router)

app.mount('#app')
