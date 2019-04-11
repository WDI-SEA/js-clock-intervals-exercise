var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

var sec = 0;
var min = 0;
var hr = 0;

var secondHand = setInterval(function(){
    if (sec<59){
        sec++;
    } else {
        sec = 0;
    }
    //console.log("tick", sec);
    //transform: 
    var degrees = (sec / 60) * 360;
    second.style.transform = "rotate(" + degrees + "deg)";
}, 1000)


var minuteHand = setInterval(function(){
    if (min<59){
        min++;
    } else {
        min = 0;
    }
    //console.log("tickmin", min);
    //transform: 
    minute.style.transform = "rotate("+ (min / 60) * 360 + "deg)";
}, 60000)


var hourHand = setInterval(function(){
    if (hr<11){
        hr++;
    } else {
        hr = 0;
    }
    //console.log("tickhr", hr);
    //transform: 
    hour.style.transform = "rotate("+ (hr / 12) * 360 + "deg)";
}, 3600000)


var timer = new Date(); 
var currectSec = timer.getSeconds();
var currectMin = timer.getMinutes();
var currentHr = timer.getHours(); 

var secMinToDegrees = function(secOrMin){
    var secOrMinDegrees = (secOrMin / 60) * 360;
    return secOrMinDegrees; 
}

var hrsToDegrees = function(hrs){
    var hrsToDegrees = (hrs / 12) * 360;
    return hrsToDegrees;
}

var ticker = function(){
    second.style.transform = ("rotate(" + secMinToDegrees(currentSec) + "deg)" );
    minute.style.transform = ("rotate(" + secMinToDegrees(currentMin) + "deg)");
    hour.style.transform = ("rotate(" + hrsToDegrees(currentHr)+ "deg)");
}

var fullClockTick = setInterval(function(){
    timer = new Date();
    currentSec = timer.getSeconds();
    currentMin = timer.getMinutes();
    currentHr = timer.getHours(); 
    ticker();
}, 1000);

