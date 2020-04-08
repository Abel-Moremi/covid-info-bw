import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import News from './components/News';
import Map from './components/map';
import Home from './components/Home';
import Sadc from './components/SadcNews';
import Faq from './components/Faq';
import Community from './components/Community';
import NewsShow from './components/NewsShow';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { firestorePlugin } from 'vuefire'
import './registerServiceWorker'


Vue.config.productionTip = true

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
    {path: '/sadc-news', component: Sadc},
    {path: '/news/:id', component: NewsShow, props:true},
    {path: '/map', component: Map},
    {path: '/community', component: Community},
    {path: '/faqs', component: Faq}
    
  ],
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
