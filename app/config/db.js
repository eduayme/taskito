import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyD8SzEiMaqZc2EB_SMVZ_8wt7S0-sAnfwE",
    authDomain: "rnfirebase-a06d1.firebaseapp.com",
    databaseURL: "https://rnfirebase-a06d1.firebaseio.com",
    projectId: "rnfirebase-a06d1",
    storageBucket: "rnfirebase-a06d1.appspot.com",
    messagingSenderId: "908392363509"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();