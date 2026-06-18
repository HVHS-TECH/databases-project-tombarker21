console.log("Running too cool for skl")
const HTML_OUTPUT = document.getElementById("statusMessage");
let userAge
let userGameName
async function writeForm() {
    let UID = GLOBAL_user.uid
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
    var snapshot = await firebase.database().ref('/'+ UID).once('value');
data = snapshot.val()
console.log("Running displayRead(), the message is: " + snapshot.val())
}


function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
    }
    else {
        // console.log("The message is: " + dbData)
    }
}
function homePage() {
    if (UID = null){
        alert ()
    }
    else{

    }
}