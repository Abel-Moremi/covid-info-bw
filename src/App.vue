<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import messagingService from './assets/utilities/messaging-service'
import firebaseApp from './assets/utilities/firebaseConfig'
import 'firebase/messaging'

export default {
  components: { Navbar, Footer },
  name: 'App',

  data: () => ({
    //
  }),
   methods: {
    async setFbMessaging() {
      let msgService = new messagingService();
      //Request permission
      await msgService.requestPermissionAsync();
      //Retrieve token
      await msgService.getTokenAsync();
    },
  },
  created() {
    var vm = this;

    vm.setFbMessaging();

    //Add callback for receiving FCM
    firebaseApp.messaging().onMessage(function(payload) {
      let notification = payload.notification;
      alert(notification.body);
    });
  }
};

 if ('serviceWorker' in navigator) {
      window.addEventListener('sw-cached-site.js', function() {
        navigator.serviceWorker.register('firebase-messaging-sw.js', {
          scope: '/',
        });
      });
    } 
    window.process = { env: { NODE_ENV: 'production' } };
</script>
