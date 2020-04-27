<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
       <v-snackbar
        v-model="snackbar"
        :color="color"
        :multi-line="mode === 'multi-line'"
        :timeout="timeout"
        :vertical="mode === 'vertical'"
        top
      >
        {{ snackbarText }}
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
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
    snackbar: false,
    color: '',
    mode: '',
    timeout: 6000,
    snackbarText: ''
  }),
   methods: {
    async setFbMessaging() {
      let msgService = new messagingService();
      //Request permission
      await msgService.requestPermissionAsync();
      //Retrieve token
      await msgService.getTokenAsync();
    },
    showSnackbar(text){
      this.snackbar = true;
      this.snackbarText = text;
      setTimeout(()=>{console.log("Now you're emitting an event")},this.timeout);
    }
  },
  created() {
    var vm = this;

    vm.setFbMessaging();

    //Add callback for receiving FCM
    firebaseApp.messaging().onMessage(function(payload) {
      let notification = payload.notification;
      this.showSnackbar(notification.body);
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
