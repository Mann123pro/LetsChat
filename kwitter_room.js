var firebaseConfig = {
      apiKey: "AIzaSyAdMDCYp7b6vwyiTFOkNbyd6_6ulywuKR8",
      authDomain: "kwitter-208bf.firebaseapp.com",
      databaseURL: "https://kwitter-208bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-208bf",
      storageBucket: "kwitter-208bf.appspot.com",
      messagingSenderId: "413586816193",
      appId: "1:413586816193:web:893783f95f52267226e840"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
