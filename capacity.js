(function() {
  $(document).ready(init);
  var config = {
    apiKey: "AIzaSyBCCOueSDHXoEwdjzR3FDt7hRqhZmqy1No",
    authDomain: "center-for-the-homeless.firebaseapp.com",
    databaseURL: "https://center-for-the-homeless.firebaseio.com",
    projectId: "center-for-the-homeless",
    storageBucket: "center-for-the-homeless.appspot.com",
    messagingSenderId: "1019432978985"
  };

function init() {
  firebase.initializeApp(config);
  // alert('it is working');
  $('.bed').click(check);
}

function check(){
  $(this).toggleClass("red");
  
  function loop();
}
  
function loop(){
  var ref = fireabse.database().ref("Room");
  
  ref.on("child_added", function(snapshot){
    var data = snapshot.val();
    for(i = 0; i < data.length; i++){
      console.log(data); 
    }
  });
}
  
})();
