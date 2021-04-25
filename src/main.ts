import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import mitt, { Emitter } from 'mitt'

import App from './App.vue'

import router from './router/index'
import { key, store } from './store'
import 'element-plus/lib/theme-chalk/index.css'
import './style/basic.styl'

const app = createApp(App)
// const emitt: Emitter = mitt()
// app.use(emitt)
app.use(router)
app.use(store, key)
app.use(ElementPlus)

app.mount('#app')
