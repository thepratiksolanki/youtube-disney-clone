import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBGuOOY4ZCwxvHn27ReCaQqvtHYwG8_UHQ",
    authDomain: "disneyplus-clone-a969a.firebaseapp.com",
    projectId: "disneyplus-clone-a969a",
    storageBucket: "disneyplus-clone-a969a.appspot.com",
    messagingSenderId: "845707707839",
    appId: "1:845707707839:web:ae01764bbed630786e0d0a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;