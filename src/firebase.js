import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdIr4EsqBb55CVhyyBs9s_4oR0llwO0VM",
    authDomain: "todo-app-3b321.firebaseapp.com",
    databaseURL: "https://todo-app-3b321.firebaseio.com",
    projectId: "todo-app-3b321",
    storageBucket: "todo-app-3b321.appspot.com",
    messagingSenderId: "1012955766190",
    appId: "1:1012955766190:web:4c280613e05b8a683bbc3f",
    measurementId: "G-YS3E560WH9"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();