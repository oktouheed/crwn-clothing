import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHJiHH_EXEeH3a4nZvMqaLwvZQXJgwpcs",
    authDomain: "crwn-db-t.firebaseapp.com",
    databaseURL: "https://crwn-db-t.firebaseio.com",
    projectId: "crwn-db-t",
    storageBucket: "crwn-db-t.appspot.com",
    messagingSenderId: "472990822071",
    appId: "1:472990822071:web:4f864742bbe44e1e06a732"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);