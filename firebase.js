import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCT6my63osNwXOFuMd7267DBqwcnCwCDI",
    authDomain: "logintest-bff14.firebaseapp.com",
    databaseURL: "https://logintest-bff14.firebaseio.com",
    projectId: "logintest-bff14",
    storageBucket: "logintest-bff14.appspot.com",
    messagingSenderId: "88313031943",
    appId: "1:88313031943:web:3ce22944c3d09f98aee9a2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;