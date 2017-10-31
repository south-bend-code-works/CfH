(function(){
  $(document).ready(init);
  
function init(){
  getData();
}

function getData(){
  var ref = firebase.database().ref("applicant");
  ref.on("child_added", function(snapshot){
    var data = snapshot.val();
    var fname = data.fname;
    var mname = data.mname;
    var lname = data.lname;
    var dob = data.dob;
    var gender = data.gender;
    var comeb = data.comeb;
    var hasId = data.hasId;
    var housing = data.housing;
    var kids = data.kids;
    var policy = data.policy;
    var single = data.single;
    var vet = data.vet;
    showData();
    
    function showData(){
      //Div
      var applicant = document.createElement("div");
      //First Name
      var fnameHeader = document.createElement("h2");
      fnameHeader.textContent = "First Name";
      applicant.appendChild(fnameHeader);
      var fnameElement = document.createElement("p");
      fnameElement.textContent = fname;
      applicant.appendChild(fnameElement);
      //Middle Initial
      var mnameHeader = document.createElement("h2");
      mnameHeader.textContent = "Middle Initial";
      applicant.appendChild(mnameHeader);
      var mnameElement = document.createElement("p");
      mnameElement.textContent = mname;
      applicant.appendChild(mnameElement);
      //Last Name
      var lnameHeader = document.createElement("h2");
      lnameHeader.textContent = "Last Name";
      applicant.appendChild(lnameHeader);
      var lnameElement = document.createElement("p");
      lnameElement.textContent = lname;
      applicant.appendChild(lnameElement);
      //DOB
      var dobHeader = document.createElement("h2");
      dobHeader.textContent = "DOB";
      applicant.appendChild(dobHeader);
      var dobElement = document.createElement("p");
      dobElement.textContent = dob;
      applicant.appendChild(dobElement);
      //Gender
      var genderHeader = document.createElement("h2");
      genderHeader.textContent = "Gender";
      applicant.appendChild(genderHeader);
      var genderElement = document.createElement("p");
      genderElement.textContent = gender;
      applicant.appendChild(genderElement);
      //Housing: Single
      var singleHeader = document.createElement("h2");
      singleHeader.textContent = "Looking for Single Housing";
      applicant.appendChild(singleHeader);
      var singleElement = document.createElement("p");
      singleElement.textContent = single;
      applicant.appendChild(singleElement);
      //Housing: withChildren
      var withChildrenHeader = document.createElement("h2");
      withChildrenHeader.textContent = "Looking for Housing with Children";
      applicant.appendChild(withChildrenHeader);
      var withChildrenElement = document.createElement("p");
      withChildrenElement.textContent = kids;
      applicant.appendChild(withChildrenElement);
      //Vet
      var vetHeader = document.createElement("h2");
      vetHeader.textContent = "Is a Vet";
      applicant.appendChild(vetHeader);
      var vetElement = document.createElement("p");
      vetElement.textContent = vet;
      applicant.appendChild(vetElement);
      //Has an ID
      var idHeader = document.createElement("h2");
      idHeader.textContent = "Has Photo ID";
      applicant.appendChild(idHeader);
      var idElement = document.createElement("p");
      idElement.textContent = hasId;
      applicant.appendChild(idElement);
      //Policy
      var policyHeader = document.createElement("h2");
      policyHeader.textContent = "Willing to abide by the Drug and alchohol policy of the Center fo the Homeless";
      applicant.appendChild(policyHeader);
      var policyElement = document.createElement("p");
      policyElement.textContent = policy;
      applicant.appendChild(policyElement);
      //Come before
      var comebHeader = document.createElement("h2");
      comebHeader.textContent = "Has come before";
      applicant.appendChild(comebHeader);
      var comebElement = document.createElement("p");
      comebElement.textContent = comeb;
      applicant.appendChild(comebElement);
      
      document.getElementById("infoDisplay").appendChild("applicant");
    }
  });
}
})();
