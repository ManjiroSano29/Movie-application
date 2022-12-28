import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDriE225WYtVocpTgEz22wSqqxYgcTrYqY",
    authDomain: "netflix-edeb7.firebaseapp.com",
    projectId: "netflix-edeb7",
    storageBucket: "netflix-edeb7.appspot.com",
    messagingSenderId: "720786137851",
    appId: "1:720786137851:web:e54dae769d0cfcef9b465e",
    measurementId: "G-HD94HHEDYV"
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage
