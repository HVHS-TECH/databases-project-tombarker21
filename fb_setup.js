/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
 const firebaseConfig = {
    apiKey: "AIzaSyBrn5cEyvlPPvsCyuisltGiqXN-WQWejOQ",
    authDomain: "tom-barker-12comp.firebaseapp.com",
    databaseURL: "https://tom-barker-12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tom-barker-12comp",
    storageBucket: "tom-barker-12comp.firebasestorage.app",
    messagingSenderId: "624686099687",
    appId: "1:624686099687:web:d527aaf983d2287fe88642"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);