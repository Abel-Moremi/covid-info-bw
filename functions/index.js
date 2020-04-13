const functions = require('firebase-functions');
var {Firestore} = require('@google-cloud/firestore');

const firebaseConfig = {
    projectId: "covid-info-bw"
  };

const db = new Firestore();
 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! Dawg I am beast");
});


exports.getData = functions.https.onRequest((req, res) => {
    const docRef = db.collection('FunctionTest').doc('Cm38kBYShNnyuLVpizcy');
    const getDoc = docRef.get()
        .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
            return res.send('Not Found')
        } 
            console.log(doc.data());
            return res.send(doc.data());
        })
        .catch(err => {
        console.log('Error getting document', err);
    });
});


 