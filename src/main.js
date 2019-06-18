import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
require('semantic-ui-css/semantic.css')


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
