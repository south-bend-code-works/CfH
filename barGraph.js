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
var jan = 0, feb = 0, mar =  0, apr = 0, may = 0, jun = 0, jul = 0, aug = 0, sept = 0, oct = 0, nov = 0, dec = 0, year;

function init(){
    firebase.initializeApp(config);
    getData();
}

function getData(){
    var ref = firebase.database().ref("Applicant");
    ref.on('value', function(snapshot){
        var data = snapshot.val();
        //console.log(data);
        for(var i in data){
            var date = data[i].dt;
            var month = date.split(":");
            year = month[2];
            month = month[0];
            month = Number(month);
            //console.log(month);
            if(month === 1){
                jan = jan + 1;
                //console.log(jan);
            }else if(month === 2){
                feb = feb + 1;
            }else if(month === 3){
                mar = mar + 1;
            }else if(month === 4){
                apr = apr + 1;
            }else if(month === 5){
                may = may + 1;
            }else if(month === 6){
                jun = jun + 1;
            }else if(month === 7){
                jul = jul + 1;
            }else if(month === 8){
                aug = aug + 1;
            }else if(month === 9){
                sept = sept + 1;
            }else if(month === 10){
                oct = oct + 1;
            }else if(month === 11){
                nov = nov + 1;
            }else{
                dec = dec + 1;
            }
        }
        $('.year').append(year);
        showData();
    });
}

function showData(){
    //January
    var janCanvas = document.getElementById("jan");
    var ctx = janCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -jan);

    $('.jan').text(jan);

    //February
    var febCanvas = document.getElementById("feb");
    var ctx = febCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -feb);

    $('.feb').text(feb);

    //March
    var marCanvas = document.getElementById("mar");
    var ctx = marCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -mar);

    $('.mar').text(mar);

    //April
    var aprCanvas = document.getElementById("apr");
    var ctx = aprCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -apr);

    $('.apr').text(apr);

    //May
    var mayCanvas = document.getElementById("may");
    var ctx = mayCanvas.getContext("2d");
    ctx.fillStyle = "#4169e1";
    ctx.fillRect(0, 199, 50, -may);

    $('.may').text(may);

    //June
    var junCanvas = document.getElementById("jun");
    var ctx = junCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -jun);

    $('.jun').text(jun);

    //July
    var julCanvas = document.getElementById("jul");
    var ctx = julCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -jul);

    $('.jul').text(jul);

    //August
    var augCanvas = document.getElementById("aug");
    var ctx = augCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -aug);

    $('.aug').text(aug);

    //September
    var septCanvas = document.getElementById("sept");
    var ctx = septCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -sept);

    $('.sept').text(sept);

    //October
    var octCanvas = document.getElementById("oct");
    var ctx = octCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -oct);

    $('.oct').text(oct);

    //November
    var novCanvas = document.getElementById("nov");
    var ctx = novCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -nov);
    //console.log(nov);

    $('.nov').text(nov);

    //December
    var decCanvas = document.getElementById("dec");
    var ctx = decCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 199, 50, -dec);

    $('.dec').text(dec);
}
})();