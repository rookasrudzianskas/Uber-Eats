import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvauH_iySYZVXZTshFfBiiSxOUsEFIwBM",
    authDomain: "rookas-uber-eats.firebaseapp.com",
    projectId: "rookas-uber-eats",
    storageBucket: "rookas-uber-eats.appspot.com",
    messagingSenderId: "123966888385",
    appId: "1:123966888385:web:3e4353fc479e5b915c7740",
    measurementId: "G-F2G4ZYHB7T"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
