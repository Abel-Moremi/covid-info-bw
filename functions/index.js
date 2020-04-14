const functions = require('firebase-functions');
var {Firestore} = require('@google-cloud/firestore');
const rp = require('request-promise');


const db = new Firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! Dawg I am beast");
});


exports.getData = functions.https.onRequest((req, res) => {
    /*const docRef = db.collection('FunctionTest').doc('Cm38kBYShNnyuLVpizcy');
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
    });*/

    /* url = async () => {    
        return await fetch('https://covid19.mathdro.id/api/countries/south%20africa'); 
    }*/

    let countriesToBeChecked = [];
    let countries = db.collection('FunctionTest');
    let query = countries.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        } 
        snapshot.forEach(doc => {
          var countryName = doc.get('name');
          if(doc.get('name') === 'South Africa'){
            //console.log(doc.id, '=>', countryName);
            countriesToBeChecked.push(countryName);
            console.log(countriesToBeChecked)
            var retrievedData = retrieveCountryData(countryName);
            //console.log(retrievedData)
            countries.doc(doc.id).update({
                confirmed: 2500,
                //lastUpdate: retrievedData.lastUpdate,
                //death: retrievedData.deaths.value,
                //recovered: retrievedData.recovered.value
            });
          }
        });
        return;   
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    
    function retrieveCountryData(countryName){
        const url = 'https://covid19.mathdro.id/api/countries/' + countryName;
        var options = {
            uri: url, // Automatically parses the JSON string in the response
        };

        return rp(options)
        .then(result => {
            //console.log(result);
            return JSON.parse(result)
        }).catch(err => {
            // API call failed...
            console.log(err)
        });

    }

    /*const url = 'https://covid19.mathdro.id/api/countries/botswana';
    var options = {
        uri: url, // Automatically parses the JSON string in the response
    };

    return rp(options)
    .then(result => {
        console.log('here is response: ' + result);
        return res.send(result);
    }).catch(err => {
        // API call failed...
        return res.send(err);
    });*/

});


 