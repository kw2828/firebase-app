import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: 'workpal-mrdlnb.firebaseapp.com',
    databaseURL: 'https://workpal-mrdlnb-default-rtdb.firebaseio.com',
    projectId: 'workpal-mrdlnb',
    storageBucket: 'workpal-mrdlnb.appspot.com',
    messagingSenderId: '240905824340',
    appId: '1:240905824340:web:d30c306cc751b3ecff65c1',
    measurementId: 'G-WE5NKWBEFR'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
