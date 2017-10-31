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
    $('#logOut').on("click", logOut);
  }
  
  function getData(){
   var fname = $('#firstName').val();
   var mname = $('#middle').val();
   var lname = $('#lastName').val();
   var dob = $('#birth').val();
   var gender = $("input[name='group1']:checked").val();
   var housing = $("input[name='group2']:checked").val();
   var single = $('#single').val();
   var kids = $('#kids').val();
   var vet = $('#vet').is(":checked");
   var hasId = $('#photoid').is(":checked");
   var policy = $('#policy').is(":checked");
   var comeb = $('#comeb').is(":checked");
   var date = Date.getDate();
   console.log(date);
   var dt = new Date('YYYY-MM-DDTHH:MM:SSZ');
   console.log(dt);
    
  var data = {
    fname:fname,
    mname:mname,
    lname:lname,
    dob:dob,
    gender:gender,
    housing:housing,
    single:single,
    kids:kids,
    vet:vet,
    hasId:hasId,
    policy:policy,
    comeb:comeb,
    dt:dt,
  }
  
  var newApplicantKey = firebase.database().ref().child('Applicant').push().key;
  var updates = {};
  updates['/Applicant/' + newApplicantKey] = data;
  firebase.database().ref().update(updates);
    
    console.log("working");
  }
  
function logOut(){
  firebase.auth().signOut();
  location.replace("adminLogin.html");
  }
})();
