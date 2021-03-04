import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAf60GMkMDhdNLQEY_L46ocQbpoJ8QgxCo",
    authDomain: "linkedin-clone-9bb29.firebaseapp.com",
    projectId: "linkedin-clone-9bb29",
    storageBucket: "linkedin-clone-9bb29.appspot.com",
    messagingSenderId: "935937418344",
    appId: "1:935937418344:web:622a3e18ac1547672187dd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };