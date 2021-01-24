import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJssNdac8oP-2Pt4pSYDPZhfFxIsdTYVA",
    authDomain: "crwn-db-8eafd.firebaseapp.com",
    projectId: "crwn-db-8eafd",
    storageBucket: "crwn-db-8eafd.appspot.com",
    messagingSenderId: "320660294014",
    appId: "1:320660294014:web:10d924e1c7f3d70c9ecb2f",
    measurementId: "G-G1TYZSK6J4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;