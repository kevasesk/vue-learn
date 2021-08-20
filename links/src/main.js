import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data:{
    config:{
      pages:[1,2,3]
    }
  },
  render: h => h(App),
}).$mount('#app')
