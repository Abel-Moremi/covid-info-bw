import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/messaging'

const firebaseConfig = {   
    projectId: "covid-info-bw",
  };

firebase.initializeApp(firebaseConfig)
 
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BOsBMtgAOKzk0bu68q_Y9vnNJVE9XmQ6q0yb9NbK3Lx8Y0yi2Cs-h-aP-X_9OIjaPH_pYJWcn2ijGvst4nulmAU"); 

export const firebaseIntance = firebase;
// Get a Firestore instance
export const db = firebase.firestore()




  db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });
  
  db.enablePersistence().catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });


  // Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});


