// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV_11XiulfAqKFgAKxWX8GA6tR-JQr1ZA",
    authDomain: "limas-99199.firebaseapp.com",
    projectId: "limas-99199",
    storageBucket: "limas-99199.appspot.com",
    messagingSenderId: "510359416608",
    appId: "1:510359416608:web:ae032ae419e968f041b145",
    measurementId: "G-4H6CPNQFRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);