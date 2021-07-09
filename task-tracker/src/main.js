import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";
Vue.use(VueModalTor, {
  bgPanel: "#7957d5"
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
