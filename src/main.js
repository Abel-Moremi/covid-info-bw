import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import News from './components/News';
import Map from './components/map';
import Home from './components/Home';

Vue.config.productionTip = false

Vue.use(vuetify);
Vue.use(VueRouter);

//Initialize Routes
const router = new VueRouter({
  routes : [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/map', component: Map}
  ],
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
