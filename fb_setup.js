// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi1z7HOLIpfFd4UtAV6Z5P5Lt5_XSDoYY",
  authDomain: "comp-2026-tom-barker.firebaseapp.com",
  databaseURL: "https://comp-2026-tom-barker-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comp-2026-tom-barker",
  storageBucket: "comp-2026-tom-barker.firebasestorage.app",
  messagingSenderId: "943483616470",
  appId: "1:943483616470:web:75b3c0a66b0b37e5231d77",
  measurementId: "G-MKDK2NK4HN"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);