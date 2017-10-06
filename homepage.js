(function() {
  $(document).ready(init);
  
// Initialize Firebase
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
    $('#submit').on("click", getData);
  }
  
  function getData(){
   var fname = $('#firstName').val();
   var mname = $('#middle').val();
   var lname = $('#lastName').val();
   var gender = $('.gender:checked').val();
   var housing = $('.housing:checked').val();
   var single = $('#single').val();
   var kids = $('#kids').val();
   var vet = $('#vet').val();
   var photoid = $('#photoid').val();
   var policy = $('#policy').val();
   var comeb = $('#comeb').val();
   
  var data = {
    fname:fname,
    mname:mname,
    lname:lname,
    gender:gender,
    housing:housing,
    single:single,
    kids:kids,
    vet:vet,
    photoid:photoid,
    policy:policy,
    comeb:comeb,
  }
  
  var newApplicantKey = firebase.database().ref().child('Applicant').push().key;
  var updates = {};
  updates['/Applicant/' + newApplicantKey] = data;
  firebase.database().ref().update(updates);
    
    console.log("working");
  }
})();
