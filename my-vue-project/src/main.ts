import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'
import VueApexCharts from 'vue3-apexcharts'

/*
const app = createApp(App)
app.use(VueApexCharts)
app.mount('#app')
*/

createApp(App).use(VueApexCharts).use(router).mount('#app')
