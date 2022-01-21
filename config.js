import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA8-7JdgfmbfQZrjJc04uSeAp3oOvpvvcQ",
    authDomain: "e-rider-2e345.firebaseapp.com",
    projectId: "e-rider-2e345",
    storageBucket: "e-rider-2e345.appspot.com",
    messagingSenderId: "924966293842",
    appId: "1:924966293842:web:2395609a94d83a05aa2a8b"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
     }
     export default firebase.firestore();

