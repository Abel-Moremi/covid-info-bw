import firebase from 'firebase/app'

const firebaseConfig = {
    projectId: "covid-info-bw",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp