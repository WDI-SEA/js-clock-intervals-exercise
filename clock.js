
// second need to turn 6 degree every 1 second  
// min need to turn 6/60 degree every 1 second
// hour need to turn 30/3600 degree every 1 second 

//declare variables
var secHand = document.getElementById('second');
var hourHand = document.getElementById('hour');
var minHand = document.getElementById('minute');

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


//convert sec to degree 
var secDegree = sec*6;
var minDegree = min*6;
var hourDegree = (hour/12)*360 +((min*15)/30);

//rotate function 
function rotateSecond(){
    secHand.style.transform = "rotate(" + secDegree + "deg)";
    secDegree += 6;
}

function rotateMin(){
    minHand.style.transform = "rotate(" + minDegree + "deg)";
    minDegree += 6/60;
}
function rotateHour(){
    hourHand.style.transform = "rotate(" + hourDegree + "deg)";
    hourDegree += 30/3600;
}
setInterval(rotateSecond,1000);
setInterval(rotateMin,1000);
setInterval(rotateHour,1000);

//display digital clock
function displayClock(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sec = addZero(sec);
    min =addZero(min);
    var time = hour + ":" + min + ":" + sec; 
    document.getElementById("digitalclock").innerHTML = time;
}
function addZero(i){
    if (i<10) {i = "0" + i};
    return i;
}

setInterval(displayClock,1000);