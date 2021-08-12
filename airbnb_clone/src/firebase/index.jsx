import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLzJ_6hZmTZVRmZOJVDGlhpEtNAZGKhl4",
    authDomain: "image-uploader-3f271.firebaseapp.com",
    projectId: "image-uploader-3f271",
    storageBucket: "image-uploader-3f271.appspot.com",
    messagingSenderId: "716216228854",
    appId: "1:716216228854:web:595aa37558fda9618285d7",
    measurementId: "G-V1NET90JKG"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
