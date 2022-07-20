import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyC7uVpipcgQWP5uu-6wbfTWQ7ge4KL7Bi0",
  authDomain: "messenger-clone-80b53.firebaseapp.com",
  projectId: "messenger-clone-80b53",
  storageBucket: "messenger-clone-80b53.appspot.com",
  messagingSenderId: "189493671594",
  appId: "1:189493671594:web:62e2fa9a27b6d7061f42d3",
  measurementId: "G-RTN5SB1217"
});


const db = firebaseApp.firestore();

export default db;