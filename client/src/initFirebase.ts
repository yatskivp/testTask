import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "products-app-62f37.firebaseapp.com",
    projectId: "products-app-62f37",
    storageBucket: "products-app-62f37.appspot.com",
    messagingSenderId: "222585633215",
    appId: "1:222585633215:web:3811f5d93c4de9b6aa090a"
};

const app = initializeApp(firebaseConfig);