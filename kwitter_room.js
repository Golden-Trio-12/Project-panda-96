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

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

