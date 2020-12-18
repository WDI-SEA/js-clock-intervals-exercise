
var secDegrees=0;
var minDegrees=0;
var hourDegrees=0;

function turnSecond(){
    
    
    var el = document.getElementById("second")
    secDegrees +=6;
    el.style.transform = "rotate(" + secDegrees + "deg)";
}


function turnMinute(){
    minDegrees +=6;
    var el = document.getElementById("minute")
    el.style.transform = "rotate(" + minDegrees + "deg)";
}

function turnHour(){
    hourDegrees +=30;
    var el = document.getElementById("hour")
    el.style.transform = "rotate(" + hourDegrees + "deg)";
}

var secTime=setInterval(turnSecond,1000);

var minTime=setInterval(turnMinute,60000);

var hourTime=setInterval(turnHour,3600000);