// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
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
const app = firebase.initializeApp(firebaseConfig);
export default firebase;
