import React from 'react';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC-lDR9gzo2JqasEoimwdCCvqGKW23m6hE",
    authDomain: "webapp-9f582.firebaseapp.com",
    databaseURL: "https://webapp-9f582.firebaseio.com",
    projectId: "webapp-9f582",
    storageBucket: "webapp-9f582.appspot.com",
    messagingSenderId: "271380362896",
    appId: "1:271380362896:web:c54ecb9a6f701f2b4b8a15",
    measurementId: "G-LMDT9HQ98Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
