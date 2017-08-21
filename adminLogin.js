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
    $('#login').on('click', getData);
    $('#signOut').on('click', logOut);
}

function getData(){
    var email = $('#username').val();
    var pass = $('#password').val();
    console.log(email,pass);

    var promise = firebase.auth().signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    console.log("working");

    stateChanged();
}

function logOut(){
    var promise = firebase.auth();
    promise.signOut();

    stateChanged();
}

function stateChanged(){
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            console.log(user);
            location.assign("capacity.html")
        }else{
            console.log("not logged in");
        }
    });
}
})();