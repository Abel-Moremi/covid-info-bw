import firebaseApp from '../utilities/firebaseConfig'
import 'firebase/messaging'
const axios = require('axios');


// Initialize messaging
window.firebaseMessaging = firebaseApp.messaging();

export default class MessagingService {

    constructor() {

        this.messaging = window.firebaseMessaging;
        this.messaging.usePublicVapidKey(
            "BOsBMtgAOKzk0bu68q_Y9vnNJVE9XmQ6q0yb9NbK3Lx8Y0yi2Cs-h-aP-X_9OIjaPH_pYJWcn2ijGvst4nulmAU"
        );
    }

    async requestPermissionAsync() {

        try {
            await this.messaging.requestPermission();
            console.log('Notification permission granted.');
        } catch (e) {
            console.log('Unable to get permission to notify.', e);
        }
       
    }

    async getTokenAsync() {

        try {
            let currentToken = await this.messaging.getToken();
            if (currentToken) {
                await this.sendTokenToServerAsync(currentToken);
                return currentToken;
            }
            else {
                console.log('No Instance ID token available. Request permission to generate one.');
                this.setTokenSentToServerFlg(false);
                return false;
            }
        } catch (err) {
            console.log('An error occurred while retrieving token. ', err);
            this.setTokenSentToServerFlg(false);
            return false;
        }
    }

    async sendTokenToServerAsync(currentToken) {

        try {
            if (!this.isTokenSentToServer()) {
                console.log('Sending token to server...'+ currentToken);
                // TODO: Send the current token to your server.
                this.setTokenSentToServerFlg(true);
                axios.post(
                        `https://us-central1-covid-info-bw.cloudfunctions.net/GeneralSubscription`,{ currentToken },
                        {
                            headers: new Headers({
                                 'Content-Type': 'application/json',
                                 'Access-Control-Allow-Origin' : 'http://localhost:8080',
                                 'Access-Control-Allow-Methods': 'GET, POST'
                               })
                          }
                        )
                    .then(response => {
                        window.localStorage.setItem('messagingToken',currentToken)
                        console.log(response)
                    }).catch((err) => {
                        console.log(err)
                    })
            }
            else {
                console.log('Token already sent to server so won\'t send it again unless it changes');
            }
        } catch (err) {
            console.log('Unable to send token to server', err);
        }
    }

    isTokenSentToServer() {
            return window.localStorage.getItem('sentToServer') === '1';
    }

    setTokenSentToServerFlg(sent) {
            window.localStorage.setItem('sentToServer', sent ? '1' : '0');
    }

    async deleteTokenAsync() {
        try {
            let currentToken = await this.messaging.getToken();
            await this.messaging.deleteToken(currentToken);
            this.setTokenSentToServerFlg(false);
            console.log('Token deleted.');
        } catch (err) {
            console.log('Unable to delete token. ', err);
        }
    }


}
