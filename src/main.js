import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Tap from 'vtap'

require('semantic-ui-css/semantic.css')
Vue.use(Tap)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
