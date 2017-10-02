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
   var fname = $('#firstName').val();
   var mname = $('#middle').val();
   var lname = $('#lastName').val();
   var gen1 = $('#gender1').val();
   var gen2 = $('#gender2').val();
   var gen3 = $('#gender3').val();
   var single = $('#single').val();
   var kids = $('#kids').val();
   var vet = $('#vet').val();
   var photoid = $('#photoid').val();
   var policy = $('#policy').val();
   var comeb = $('#comeb').val();
   
    firebasefname.set({
        First_Name:fname,
      });
    
    firebaselname.set({
      Last_Name:lname,
     });
    
    firebasemname.set({
      Middle_Name:mname,
     });
    
    firebaseGender1.set({
      Male:gen1,
    });
    
    firebaseGender2.set({
      Female:gen2,
    });
    
    firebaseGender3.set({
      Other:gen3,
    });
    
    firebaseSingle.set({
      Single:single,
    });
    
    firebaseKids.set({
      Kids:kids,
    });
    
    firebaseVet.set({
      Veteran:Vet,
    });
    
    firebasePhoto.set({
      Photo:photo,
    });
    
    firebasePolicy.set({
      Policy:policy,
    });
    
    firebaseComeb.set({
      Comeb:comeb,
    });
    
    console.log("working");
  }
})();
