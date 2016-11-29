import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAXx0JFcBz3XMAO2pEFL5FZF3Kh0Sij3Ok",
    authDomain: "topicwizard.firebaseapp.com",
    databaseURL: "https://topicwizard.firebaseio.com",
    storageBucket: "topicwizard.appspot.com",
    messagingSenderId: "688371197052"
  };

export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();
