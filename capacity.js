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
  
  
  // These are Alex's suggestions...
  getBedStatus();
}

function check(){
  $(this).toggleClass("red");
}
  
//  These are also alex's suggestions...
 function getBedStatus(){
  firebase.database().ref("Room").once('value', function(snapshot){
    var data = snapshot.val();
    console.log(data);
  });
}
  
})();
