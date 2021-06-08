// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDE1YO6o3gdkE8hKqUEpdwIJY6pkg0hz8A",
      authDomain: "class-test-160ff.firebaseapp.com",
      projectId: "class-test-160ff",
      storageBucket: "class-test-160ff.appspot.com",
      messagingSenderId: "44737223281",
      appId: "1:44737223281:web:8c03353f97468735ff19d0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.setItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+ username + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding roomname"
});
localStorage.setItem("room_name", room_name);
window.location = kwitter_page.html;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class ='room_name' id = "+Room_names +"onclick = 'redirectToRoomName(this.id)'> #"+Room_names + '</div> <hr>';
      document.getElementById("output").innerHTML += room;

      
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}