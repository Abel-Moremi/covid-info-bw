import firebaseApp from '../utilities/firebaseConfig'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebaseApp.firestore()


db.settings({
  cacheSizeBytes: firebaseApp.firestore.CACHE_SIZE_UNLIMITED
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
