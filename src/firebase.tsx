import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyApBlN0RlDy27nv4myR_JHi1cma4esRrqM",
    authDomain: "fir-quiz-b915a.firebaseapp.com",
    databaseURL: "https://fir-quiz-b915a.firebaseio.com",
    projectId: "fir-quiz-b915a",
    storageBucket: "fir-quiz-b915a.appspot.com",
    messagingSenderId: "866938645874",
    appId: "1:866938645874:web:b4006290d741dfe864c1eb",
    measurementId: "G-QR23ZKFS4G"
}

firebase.initializeApp(config);
export default firebase