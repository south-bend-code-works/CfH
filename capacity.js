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
  console.log('it is working');


  // These are Alex's suggestions...
  getBedStatus();
}


//  These are also alex's suggestions...
 function getBedStatus(){
  firebase.database().ref("Room").once('value', function(snapshot){
    var data = snapshot.val();
    console.log(data);

    for(i = 0; i < data.length; i++){
      console.log(data);
    }

    for(var x in data){
      console.log(data[x]);
    }

  });
}

function callRoom(){
  var print = snapshot.val('room_1');
  console.log(print);
}

// function initChangeColor() {
//   console.log('We are here.');
//   if (firebase.database().ref("Room").val('true')) {
//     $('.bed').css('background-color', 'red');
//   } else {
//     $('.bed').css('background-color', '#032584')
//   }
// }


//function click() {
//  $('.bed').click(check);
//}
//
//function check(){
//  $(this).toggleClass("red");
//}


})();
