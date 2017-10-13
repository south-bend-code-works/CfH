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
  $("#women").on('click', '.bed',initChangeColor);
  $("#men").on('click', '.bed',ChangeColor);

  getBedStatus();
}


function getBedStatus(){

  // Womens
  firebase.database().ref().child("Room/Women").on('value', function(snapshot){
    $('#women').empty();
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#women').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#women').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

  // Mens
  firebase.database().ref().child("Room/Men").on('value', function(snapshot){
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r];
      var roomNum = r;
      if(roomAvail === true){
        $('#men').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#men').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

  // Family 1
  firebase.database().ref().child("Room/Family_1").on('value', function(snapshot){
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r];
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_1').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_1').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

  // Family 2
  firebase.database().ref().child("Room/Family_2").on('value', function(snapshot){
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r];
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_2').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_2').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

  // Family 3
  firebase.database().ref().child("Room/Family_3").on('value', function(snapshot){
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r];
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_3').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_3').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

  // Family 4
  firebase.database().ref().child("Room/Family_4").on('value', function(snapshot){
    var room = snapshot.val();

    for(var r in room){
      var roomAvail = room[r];
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_4').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_4').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });

}
// end of function getBedStatus


function initChangeColor(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Women/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Women/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Women/"+temp).update(newState);
    }
  });

}
// close to initChangeColor

function ChangeColor(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Men/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Men/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Men/"+temp).update(newState);
    }
  });

}
// close to initChangeColor



})();
