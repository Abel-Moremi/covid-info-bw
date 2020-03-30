import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    projectId: "covid-info-bw"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
