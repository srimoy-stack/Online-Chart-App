import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCtrdi_dN-k49TPSCfQMYvceLsOYfZ0kpQ",
    authDomain: "unichart-78819.firebaseapp.com",
    projectId: "unichart-78819",
    storageBucket: "unichart-78819.appspot.com",  
    messagingSenderId: "177048951407",
    appId: "1:177048951407:web:cf7a0ce51ad4c7e3260b9a"
  }).auth();