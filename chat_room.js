
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeHryJAAb_87mYbFMNCBf9Dv0OeSpzKhA",
  authDomain: "p102-81a74.firebaseapp.com",
  databaseURL: "https://p102-81a74-default-rtdb.firebaseio.com",
  projectId: "p102-81a74",
  storageBucket: "p102-81a74.appspot.com",
  messagingSenderId: "208488780010",
  appId: "1:208488780010:web:33b693a0182e1fea4e8793"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  