//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC-RudEbeKREppihiSqgjxE-zS5Fc3P3Mw",
      authDomain: "kwitter-c8ba1.firebaseapp.com",
      databaseURL: "https://kwitter-c8ba1-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8ba1",
      storageBucket: "kwitter-c8ba1.appspot.com",
      messagingSenderId: "480710167658",
      appId: "1:480710167658:web:3c07d168b6a0db3e6ace13"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();




function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg
            like:0
      });
      document.getElementById("msg").value ="";
}