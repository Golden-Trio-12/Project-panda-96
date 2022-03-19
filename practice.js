var firebaseConfig = {
    apiKey: "AIzaSyAO97Wh6EssHokkEiac8qGd5nPe-qfUi3I",
    authDomain: "kwitter-potato.firebaseapp.com",
    databaseURL: "https://kwitter-potato-default-rtdb.firebaseio.com",
    projectId: "kwitter-potato",
    storageBucket: "kwitter-potato.appspot.com",
    messagingSenderId: "552031871855",
    appId: "1:552031871855:web:1568734420ebf9bb4fbe9a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"

    });
}