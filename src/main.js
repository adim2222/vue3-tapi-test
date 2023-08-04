import { createApp } from 'vue'
import App from './App.vue'
import getData from './scripts/axios/axios.js'

getData();

createApp(App).mount('#app')
