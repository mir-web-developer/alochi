import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/database';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOPoWWPJVIUinJj-ZyNaPIVi46dlHjP_A",
  authDomain: "alochi-ccc96.firebaseapp.com",
  databaseURL: "https://alochi-ccc96-default-rtdb.firebaseio.com",
  projectId: "alochi-ccc96",
  storageBucket: "alochi-ccc96.appspot.com",
  messagingSenderId: "1067893864339",
  appId: "1:1067893864339:web:771cf2520bb7da83731a66",
  measurementId: "G-50VDRYZDHW"
}


const firebaseApp= firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db , auth, provider}