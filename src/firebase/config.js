import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCl-qLRbFFutLlGjULaR0x_eS1mgXjb908",
    authDomain: "fir-75929.firebaseapp.com",
    projectId: "fir-75929",
    storageBucket: "fir-75929.appspot.com",
    messagingSenderId: "128600809910",
    appId: "1:128600809910:web:9cf2d654eda9ead3162117",
    measurementId: "G-Y7VLWE503D"
  };

  export default firebase.initializeApp(firebaseConfig)