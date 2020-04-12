import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import News from './components/News';
import Map from './components/map';
import Home from './components/Home';
import Sadc from './components/SadcNews';
import Information from './components/Information';
import Community from './components/Community';
import Live from './components/LiveStream';
import Radio from './components/RadioLive';
import NewsShow from './components/NewsShow';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { firestorePlugin } from 'vuefire'
import './registerServiceWorker'
import VueGtag from "vue-gtag";


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
    {path: '/sadc-news', component: Sadc},
    {path: '/news/:slug/', component: NewsShow, props:true},
    {path: '/map', component: Map},
    {path: '/community', component: Community},
    {path: '/info', component: Information},
    {path: '/live', component: Live},
    {path: '/radio', component: Radio} 
  ],
  mode: 'history'
});

Vue.use(VueGtag, {
  config: { id: "G-YW8KGD0ZLN" },
  pageTrackerScreenviewEnabled: true
}, router);


new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
