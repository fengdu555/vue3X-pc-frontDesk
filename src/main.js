import { createApp } from 'vue'
import router from './router/index'
import setTheme from '@js/theme'

// 默认一个主题色
setTheme('OANGE')

import App from './App.vue'
const app = createApp(App)
app.use(router).mount('#app')
