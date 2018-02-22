import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC0kQfapTxCZVOUn-IbE5m26ya3ivpxbjo",
    authDomain: "awesomeproject-d9c38.firebaseapp.com",
    databaseURL: "https://awesomeproject-d9c38.firebaseio.com",
    projectId: "awesomeproject-d9c38",
    storageBucket: "awesomeproject-d9c38.appspot.com",
    messagingSenderId: "349722786166"
};

firebase.initializeApp(config);

// export const firebaseAuth = firebase.auth();
export const firebaseAuth = firebase.auth().signInAnonymously();
export const firebaseDatabase = firebase.database();

export default firebase