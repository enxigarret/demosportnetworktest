import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyChS0XLaoe7pFBjw3bitAMoYbcOc4YaIWA",
    authDomain: "sportnetwork-7491d.firebaseapp.com",
    projectId: "sportnetwork-7491d",
    storageBucket: "sportnetwork-7491d.firebasestorage.app",
    messagingSenderId: "323398138685",
    appId: "1:323398138685:web:ae22c83d41c0ef7e4ba354",
    measurementId: "G-QXX5S6FHJS"
    //appId: "YOUR_APP_ID"
};

export const firebaseApp = initializeApp(firebaseConfig);