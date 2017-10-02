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
  firebase.initializeApp(config);
  
  
  function init() {
    firebase.initializeApp(config);
    $('#submit').on("click", getData);
  }
  
  function getData(){
   var firebasefname = firebase.database().ref('Form').child('Fname');
   var firebaselname = firebase.database().ref('Form').child('Lname');
   var firebasemname = firebase.database().ref('Form').child('Mname');
   var firebaseGender1 = firebase.database().ref('Form').child('gen1');
   var firebaseGender2 = firebase.database().ref('Form').child('gen2');
   var firebaseGender3 = firebase.database().ref('Form').child('gen3');
   var firebaseSingle = firebase.database().ref('Form').child('single');
   var firebaseKids = firebase.database().ref('Form').child('kids');
   var firebaseVet = firebase.database().ref('Form').child('Vet');
   var firebasePhoto = firebase.database().ref('Form').child('photo');
   var firebasePolicy = firebase.database().ref('Form').child('policy');
   var firebaseComeb = firebase.database().ref('Form').child('comeb');
   var fname = $('#FirstName').val();
   var mname = $('#Middle').val();
   var lname = $('#LastName').val();
   var gen1 = $('#gender1').val();
   var gen2 = $('#gender2').val();
   var gen3 = $('#gender3').val();
   var single = $('#single').val();
   var kids = $('#kids').val();
   var vet = $('#vet').val();
   var photoid = $('#photoid').val();
   var policy = $('#policy').val();
   var comeb = $('#comeb').val();
   
    firebasefname.push({
        First_Name:fname,
      });
    
    firebaselname.push({
      Last_Name:lname,
     });
    
    firebasemname.push({
      Middle_Name:mname,
     });
    
    firebaseGender1.push({
      Male:gen1,
    });
    
    firebaseGender2.push({
      Female:gen2,
    });
    
    firebaseGender3.push({
      Other:gen3,
    });
    
    firebaseSingle.push({
      Single:single,
    });
    
    firebaseKids.push({
      Kids:kids,
    });
    
    firebaseVet.push({
      Veteran:Vet,
    });
    
    firebasePhoto.push({
      Photo:photo,
    });
    
    firebasePolicy.push({
      Policy:policy,
    });
    
    firebaseComeb.push({
      Comeb:comeb,
    });
    
    console.log("working");
  
)}();
