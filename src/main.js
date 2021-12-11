import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; 
import { firestorePlugin } from 'vuefire';
import './registerServiceWorker';
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
    {path: '/', component: () => import('./components/Home')},
    {path: '/news', component: () => import('./components/News')},
    {path: '/sadc-news', component: () => import('./components/SadcNews')},
    {path: '/news/:slug/', component: () => import('./components/NewsShow'), props:true},
    {path: '/map', component: () => import('./components/map')},
    {path: '/community', component: () => import('./components/Community')},
    {path: '/info', component: () => import('./components/Information')},
    {path: '/live', component: () => import('./components/LiveStream')},
    {path: '/radio', component: () => import('./components/RadioLive')} 
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

