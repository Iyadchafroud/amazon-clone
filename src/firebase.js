import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD44X9PdasQqisOhuvJN5A9l3uqfJq3Srg",
  authDomain: "clone-538a6.firebaseapp.com",
  projectId: "clone-538a6",
  storageBucket: "clone-538a6.appspot.com",
  messagingSenderId: "779614312994",
  appId: "1:779614312994:web:2e42cf730d85e2ef47087b",
  measurementId: "G-DWPFWJ4FES",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
