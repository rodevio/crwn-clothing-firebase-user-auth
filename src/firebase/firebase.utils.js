import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVnAbenbfHaT3exOwL3VSn5amW1KhWaG8",
    authDomain: "crwn-db-b89a5.firebaseapp.com",
    databaseURL: "https://crwn-db-b89a5.firebaseio.com",
    projectId: "crwn-db-b89a5",
    storageBucket: "crwn-db-b89a5.appspot.com",
    messagingSenderId: "354400620947",
    appId: "1:354400620947:web:c5facd342e62bce11ad866",
    measurementId: "G-6LCCZ5XGGN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
