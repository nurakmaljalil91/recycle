import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAvqbgtLWC-rP8KfPQXNfeE9wFPIhyTonA",
    authDomain: "recyclo-dashboard.firebaseapp.com",
    databaseURL: "https://recyclo-dashboard.firebaseio.com",
    projectId: "recyclo-dashboard",
    storageBucket: "recyclo-dashboard.appspot.com",
    messagingSenderId: "365033775148",
    appId: "1:365033775148:web:ed20960247d14026d13189"
};

firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firebaseFirestore = firebase.firestore();

export { firebaseStorage, firebaseFirestore };