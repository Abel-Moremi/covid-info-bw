import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    projectId: "covid-info-bw"
  };

 

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()


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