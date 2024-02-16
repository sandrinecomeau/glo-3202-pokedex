import './assets/main.css'

import './firebase/firebase'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/AuthStore';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())
const authStore = useAuthStore();
authStore.init();

app.mount('#app')
