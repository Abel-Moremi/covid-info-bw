const functions = require('firebase-functions');
var {Firestore} = require('@google-cloud/firestore');
const rp = require('request-promise');
const axios = require('axios');
const cors = require('cors');

const corsHandler = cors({origin: true});
const db = new Firestore();

exports.updateSADC = functions.https.onRequest((req, res) => {

    let countriesToBeChecked = [];
    let countries = db.collection('SadcCountriesData');

    let query = countries.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        } 
        snapshot.forEach(doc => {
          var countryName = doc.get('name');
          if((doc.get('name') !== 'DR Congo') && (doc.get('name') !== 'Lesotho')){
            (async function(){
              //console.log(doc.id, '=>', countryName);
              countriesToBeChecked.push(countryName);
              //console.log(countriesToBeChecked)
              var retrievedData = await retrieveCountryData(countryName);
              //console.log(retrievedData.lastUpdate)
              countries.doc(doc.id).update({
                  confirmed: retrievedData.confirmed.value,
                  lastUpdate: (new Date(retrievedData.lastUpdate).toLocaleString({timeZone: 'CAT' })),
                  deaths: retrievedData.deaths.value,
                  recovered: retrievedData.recovered.value
              });
            })();
          }
        });
        return;   
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      function retrieveCountryData(countryName){
        var url = 'https://covid19.mathdro.id/api/countries/' + countryName;
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

      function formatDate(timeStamp){
        return (new Date(timeStamp).toTimeString())
      }

      res.send("Done")

});

exports.GeneralSubscription = functions.https.onRequest((req, res) => {

  console.log('currToken',req.body.currentToken);

  corsHandler(req, res, () => {
    axios.post(`https://iid.googleapis.com/iid/v1/${req.body.currentToken}/rel/topics/general`,
    {},
    {
      headers: {
          'Content-Type':'application/json',
          'Authorization': `key=server_here`,
      },
    }).then((res) => {
      db.collection('Tokens').add({
        token: req.body.currentToken
      })
       
      return 
    }).catch((err) => {
        console.log(err)
        return
    })
  });

  res.send('done'); 

});