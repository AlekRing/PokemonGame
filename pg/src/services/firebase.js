import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCtFYeyihpoAkceA4_8rL_IdmJWo9Vz00o",
  authDomain: "poke-50668.firebaseapp.com",
  databaseURL: "https://poke-50668-default-rtdb.firebaseio.com",
  projectId: "poke-50668",
  storageBucket: "poke-50668.appspot.com",
  messagingSenderId: "944053762918",
  appId: "1:944053762918:web:7fe43f2afb1fe6f14026a7"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;