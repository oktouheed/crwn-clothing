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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} =  userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);