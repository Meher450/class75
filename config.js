import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDjgxZUQ1eEzRnr-s-rqeC0LL-r3n6wdBw",
  authDomain: "wireless-buzzer-app-f6c81.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-f6c81-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-f6c81",
  storageBucket: "wireless-buzzer-app-f6c81.appspot.com",
  messagingSenderId: "190036374044",
  appId: "1:190036374044:web:6ffa811874ebc7720125d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
