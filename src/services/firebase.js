import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {

    apiKey: "AIzaSyBS1634fah7TcyqPniRcOjjTGfd7xUUfhA",
    authDomain: "chatty-app-eeee9.firebaseapp.com",
    databaseURL: "https://chatty-app-eeee9-default-rtdb.firebaseio.com",
    projectId: "chatty-app-eeee9",
    storageBucket: "chatty-app-eeee9.appspot.com",
    messagingSenderId: "535156307538",
    appId: "1:535156307538:web:211d2a7d388e53feaf918b",
    //measurementId: "G-5LH2TY2CD2"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth;
  export const db = firebase.database();