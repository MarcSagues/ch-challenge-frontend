import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCWjHkhFI94Qm5guB0WnRxjev1OYFU0udo",
	authDomain: "cardiohealth-dbeb1.firebaseapp.com",
	projectId: "cardiohealth-dbeb1",
	storageBucket: "cardiohealth-dbeb1.appspot.com",
	messagingSenderId: "197618803897",
	appId: "1:197618803897:web:45442116ea9483e90a6768",
	measurementId: "G-75RFS6X0F5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App />
);
