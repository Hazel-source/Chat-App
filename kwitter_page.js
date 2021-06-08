//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
var name = message_data["name"];
var like = message_data["like"];
var message = message_data["message"];
name_with_tag = "<h4>" + name + "<img class= 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class ='message_h4'> " + message +"</h4>";
like_button = "<button class = 'btn btn-warning'id = "+firebase_message_id+"value = "+like+" onclick = 'updateLike(this.id)'>";
row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name , 
message: msg,
like: 0
});
document.getElementById("msg").value = "";
}
//End code
 } });  }); }
getData();
function updateLike(message_id){
button_id = message_id;
likes = document.getElementById("button_id").value;
update_likes = Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
 like: update_likes
});
}
