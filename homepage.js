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
    $('#firstName').change(function(h2, div){
      var name = $('#firstName').val();
      console.log(name);
      var div = document.createElement("div");
      div.id = "div";
      var h2 = document.createElement("h2");
      h2.id = "h2";
      h2.textContent = name;
      div.appendChild(h2);
      $(div).css("display", "fixed");
    });
    $('#middle').change(function(h2, div){
      var middle = $('#middle').val();
      console.log(middle);
      var h2 = document.getElementById('h2');
      h2.textContent = middle;
    });
    $('#lastName').change(function(h2, div){
      var last = $('#lastName').val();
      console.log(last);
      var h2 = document.getElementById('h2');
      h2.textContent = last;
    });
    $('#submit').on("click", getData);
    $('#logOut').on("click", logOut);
  }
  
  function getData(fname,lname){
   var fname = $('#firstName').val();
   var mname = $('#middle').val();
   var lname = $('#lastName').val();
   var dob = $('#birth').val();
   var gender = $("input[name='group1']:checked").val();
   var housing = $("input[name='group2']:checked").val();
   console.log(housing);
   var kids = $('#kids').val();
   var vet = $('#vet').is(":checked");
   var hasId = $('#photoid').is(":checked");
   var policy = $('#policy').is(":checked");
   var comeb = $('#comeb').is(":checked");
   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1;
   var yyyy = today.getFullYear();
   var min = today.getMinutes();
   var hrs = today.getHours();
   var secs = today.getSeconds();
   var dt = mm + ":" + dd + ":" + yyyy + ":" + hrs + ":" + min + ":" + secs;
   console.log(mm + ":" + dd + ":" + yyyy + ":" + hrs + ":" + min + ":" + secs);
    
  var data = {
    fname:fname,
    mname:mname,
    lname:lname,
    dob:dob,
    gender:gender,
    housing:housing,
    kids:kids,
    vet:vet,
    hasId:hasId,
    policy:policy,
    comeb:comeb,
    dt:dt,
  }
  
  console.log(data);
  
  var newApplicantKey = firebase.database().ref().child('Applicant').push().key;
  var updates = {};
  updates['/Applicant/' + newApplicantKey] = data;
  firebase.database().ref().update(updates);
    
    console.log("working");
    setTimeout(function changeLocation(fname,lname){location.replace("available.html?id=" + fname + "-" + lname);}, 3000);
  }
  
function logOut(){
  firebase.auth().signOut();
  location.replace("adminLogin.html");
}
})();
