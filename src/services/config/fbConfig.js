import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: 'workpal-ef587.firebaseapp.com',
    databaseURL: 'https://workpal-ef587.firebaseio.com',
    projectId: 'workpal-ef587',
    storageBucket: 'workpal-ef587.appspot.com',
    messagingSenderId: '57762119337',
    appId: '1:57762119337:web:e5deca3059c86f440b73b8'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
