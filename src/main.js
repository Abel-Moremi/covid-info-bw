import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import News from './components/News';
import Map from './components/map';
import Home from './components/Home';
import NewsShow from './components/NewsShow';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false

Vue.use(vuetify,{
  iconfont: 'md',
});
Vue.use(VueRouter);
Vue.use(firestorePlugin);

//Initialize Routes
const router = new VueRouter({
  routes : [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/news/:id', component: NewsShow, props:true},
    {path: '/map', component: Map}
    
  ],
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
