import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTyTqArBtOK8Fs8FU67XBqz_kUzvgL0x4",
    authDomain: "crwn-db-bbe67.firebaseapp.com",
    databaseURL: "https://crwn-db-bbe67.firebaseio.com",
    projectId: "crwn-db-bbe67",
    storageBucket: "crwn-db-bbe67.appspot.com",
    messagingSenderId: "153573921095",
    appId: "1:153573921095:web:40ae35d8755bce14567c62"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); 

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
