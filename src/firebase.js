import firebase from "firebase/compat/app";



const firebaseConfig = {
  apiKey: "AIzaSyDMVyZGqwmrC9JzoW2UHb9mrYmdAhiUSRI",
  authDomain: "food-s-kitchen.firebaseapp.com",
  projectId: "food-s-kitchen",
  storageBucket: "food-s-kitchen.appspot.com",
  messagingSenderId: "783763462758",
  appId: "1:783763462758:web:89ace897b641e921386ba7",
  measurementId: "G-K8EWJF2V3L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

