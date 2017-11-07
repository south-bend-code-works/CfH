(function(){
  $(document).ready(init);
  var config = {
    apiKey: "AIzaSyBCCOueSDHXoEwdjzR3FDt7hRqhZmqy1No",
    authDomain: "center-for-the-homeless.firebaseapp.com",
    databaseURL: "https://center-for-the-homeless.firebaseio.com",
    projectId: "center-for-the-homeless",
    storageBucket: "center-for-the-homeless.appspot.com",
    messagingSenderId: "1019432978985"
  };
function init(){
  firebase.initializeApp(config);
  console.log(window.location.href);
  var key = window.location.href;
  var key = String(key);
  key = key.slice("=")[0];
  console.log(key);
  getData();
}

function getData(){
  var ref = firebase.database().ref("Applicant");
  ref.on('child_added', function(snapshot){
    var data = snapshot.val();
    console.log(data);
    var fname = data.fname;
    console.log(fname);
    var mname = data.mname;
    var lname = data.lname;
    var dob = data.dob;
    var gender = data.gender;
    var comeb = data.comeb;
    var hasId = data.hasId;
    var housing = data.housing;
    var kids = data.kids;
    var policy = data.policy;
    var vet = data.vet;
    showData();
    
    function showData(){
      //Div
      var applicant = document.createElement("div");
      //First Name
      var fnameHeader = document.createElement("h2");
      fnameHeader.textContent = "First Name";
      $(fnameHeader).css("text-align", "left");
      applicant.appendChild(fnameHeader);
      var fnameElement = document.createElement("h4");
      fnameElement.textContent = fname;
      $(fnameElement).css("text-align", "left");
      applicant.appendChild(fnameElement);
      //Middle Initial
      var mnameHeader = document.createElement("h2");
      mnameHeader.textContent = "Middle Initial";
      applicant.appendChild(mnameHeader);
      var mnameElement = document.createElement("h4");
      mnameElement.textContent = mname;
      applicant.appendChild(mnameElement);
      //Last Name
      var lnameHeader = document.createElement("h2");
      lnameHeader.textContent = "Last Name";
      applicant.appendChild(lnameHeader);
      var lnameElement = document.createElement("h4");
      lnameElement.textContent = lname;
      applicant.appendChild(lnameElement);
      //DOB
      var dobHeader = document.createElement("h2");
      dobHeader.textContent = "DOB";
      applicant.appendChild(dobHeader);
      var dobElement = document.createElement("h4");
      dobElement.textContent = dob;
      applicant.appendChild(dobElement);
      //Gender
      var genderHeader = document.createElement("h2");
      genderHeader.textContent = "Gender";
      applicant.appendChild(genderHeader);
      var genderElement = document.createElement("h4");
      genderElement.textContent = gender;
      applicant.appendChild(genderElement);
      //Housing
      var singleHeader = document.createElement("h2");
      singleHeader.textContent = "Looking for Single Housing";
      applicant.appendChild(singleHeader);
      var singleElement = document.createElement("h4");
      singleElement.textContent = housing;
      applicant.appendChild(singleElement);
      //Vet
      var vetHeader = document.createElement("h2");
      vetHeader.textContent = "Is a Vet";
      applicant.appendChild(vetHeader);
      var vetElement = document.createElement("h4");
      vetElement.textContent = vet;
      applicant.appendChild(vetElement);
      //Has an ID
      var idHeader = document.createElement("h2");
      idHeader.textContent = "Has Photo ID";
      applicant.appendChild(idHeader);
      var idElement = document.createElement("h4");
      idElement.textContent = hasId;
      applicant.appendChild(idElement);
      //Policy
      var policyHeader = document.createElement("h2");
      policyHeader.textContent = "Willing to abide by the Drug and alchohol policy of the Center fo the Homeless";
      applicant.appendChild(policyHeader);
      var policyElement = document.createElement("h4");
      if(policy === "false"){
         $(policyElement).css("color", "red");
      }
      policyElement.textContent = policy;
      applicant.appendChild(policyElement);
      //Come before
      var comebHeader = document.createElement("h2");
      comebHeader.textContent = "Has come before";
      applicant.appendChild(comebHeader);
      var comebElement = document.createElement("h4");
      comebElement.textContent = comeb;
      applicant.appendChild(comebElement);
      console.log(applicant);
      $(applicant).css("margin-top", "15px");
      $(applicant).css("text-align", "left");
      $(applicant).css("margin-left", "5px");
      
      var infoDiv = document.getElementById("div");
      infoDiv.appendChild(applicant);
    }
  });
}
})();
