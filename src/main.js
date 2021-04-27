import Vue from 'vue'
import VueShepherd from 'vue-shepherd'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueShepherd)
new Vue({
  render: h => h(App),
}).$mount('#app')
