import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* assets */
import styles from './assets/css/main.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
