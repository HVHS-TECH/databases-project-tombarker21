/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

var GLOBAL_user;  // Google's user object
let UID;
// Set up a listener for the login state of the user.
function fb_authenticate() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

// Run when the login state of the user changes.
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; // Save the user object to a global variable
    document.getElementById("alexispissesmeoff").hidden = true
    console.log(_user)
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}

// Run the Google login popup
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;  // Save the user object to a global variable
    console.log("User has logged in")
    UID = GLOBAL_user.uid
  });
}

function fb_error(error) {
  console.log("There was an error reading the message");
  console.error(error);
}
console.log("Running too cool for skl")
const HTML_OUTPUT = document.getElementById("statusMessage");
let userAge
let userGameName
async function writeForm() {
  let UID = GLOBAL_user.uid
  sessionStorage.setItem('UID', UID)
  let email = GLOBAL_user.email
  let userPFP = GLOBAL_user.photoURL
  const userAge = document.getElementById("userAge").value;
  const userGameName = document.getElementById("userGameName").value;

  firebase.database().ref('/' + UID).set(
    {
      userAge,
      userGameName,
      email

    }
  )
  var snapshot = await firebase.database().ref('/' + UID).once('value');
  data = snapshot.val()
  console.log("Running displayRead(), the message is: " + snapshot.val())
}


function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData === null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }
  else {
    // console.log("The message is: " + dbData)
  }
}
function homePage() {
  if (UID === null) {
    alert("Please log in.");
  }
  else {
    window.location.href = "gameSelection.html";
    console.log("help")
  }
}
function goGeoDash() {
  window.location.href = "GeoDash/GeoDash game/index.html";
}


function goRacingGame() {
  window.location.href = "Racing game/programming-project-tombarker21-main/index.html";
}

function fb_highScores(_Geoscore) {
  firebase.database().ref('/geoDash/' + sessionStorage.getItem('UID')).set(
    _Geoscore
  )

}