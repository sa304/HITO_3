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
  apiKey: "AIzaSyCMeeIaynz9z2YuxyawDqOIQC7cr17M9mE",
  authDomain: "apirest-808ed.firebaseapp.com",
  databaseURL: "https://apirest-808ed.firebaseio.com",
  projectId: "apirest-808ed",
  storageBucket: "apirest-808ed.appspot.com",
  messagingSenderId: "524805307070",
  appId: "1:524805307070:web:a510ee49feddfef0013cef"
})
Vue.use(AxiosPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
