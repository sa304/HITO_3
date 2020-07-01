import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AxiosPlugin from 'vue-axios-cors';
import Firebase from 'firebase';
 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

 Firebase.initializeApp({ //colocar mi token
    apiKey: "AIzaSyAYnggbIXYy-1xDSqu3NnyugbZu_yF8U4M",
    authDomain: "pacientes-4d4bb.firebaseapp.com",
    databaseURL: "https://pacientes-4d4bb.firebaseio.com",
    projectId: "pacientes-4d4bb",
    storageBucket: "pacientes-4d4bb.appspot.com",
    messagingSenderId: "3196556956",
    appId: "1:3196556956:web:1174959ba64108d3bfff59"

})
Vue.use(AxiosPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
