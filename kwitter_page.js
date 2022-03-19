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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg =document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}