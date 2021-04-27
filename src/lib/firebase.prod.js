import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC4Ad6d94dcMLs-n-dLEHgdgCbifYAXyPU",
  authDomain: "netflix-58912.firebaseapp.com",
  databaseURL: "https://netflix-58912.firebaseio.com",
  projectId: "netflix-58912",
  storageBucket: "netflix-58912.appspot.com",
  messagingSenderId: "546067689253",
  appId: "1:546067689253:web:986f8286d36117fbcbf4cc"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

seedDatabase(firebase);

export { firebase };