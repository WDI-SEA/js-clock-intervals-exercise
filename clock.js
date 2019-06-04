
var seconds = 0;
var minutes = 0;
var hours = 0;

var secEl = document.getElementById("second");
var minEl = document.getElementById("minute");
var hourEl = document.getElementById("hour");


// Functions to convert time to rotations

var secondRotation = function() {
    var secDegrees = (seconds/60) * 360;
    secEl.style.transform = "rotate(" + secDegrees + "deg)";
    seconds++; //if statement check if greater than 60
}

var minuteRotation = function() {
    var minDegrees = (minutes/60) * 360;
    minEl.style.transform = "rotate(" + minDegrees + "deg)";
    minutes++;
}

var hourRotation = function() {
    var hourDegrees = (hours/12) * 360;
    hourEl.style.transform = "rotate(" + hourDegrees + "deg)";  
    hours++;
}

setInterval(secondRotation, 1000);
setInterval(minuteRotation, 60000);
setInterval(hourRotation, 3600000);


// var intervalHandle = setInterval( function () {
//     secondRotation(seconds);
// }, 1000);

// var intervalHandle = setInterval( function () {
//     minuteRotation(minutes);
// }, 60000);

// var intervalHandle = setInterval( function () {
//     hourRotation(hours);
// }, 3600000);



// setTimeout( function () {
//     clearInterval(intervalHandle);
// }, (seconds*1000) + (minutes*60000) + (hour*3600000))

