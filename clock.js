
var seconds = 0;
var minutes = 0;
var hours = 0;

var secEl = document.getElementById("second");
var minEl = document.getElementById("minute");
var hourEl = document.getElementById("hour");


// Functions to convert time to rotations

var secondRotation = function() { // In this case do not include a parameter because I'm calling the global variable in the function
    var secDegrees = (seconds/60) * 360;
    secEl.style.transform = "rotate(" + secDegrees + "deg)";
    seconds++; //if statement check if greater than 60
    if (seconds >= 60) {
        seconds = 0;
    }
}

var minuteRotation = function() {
    var minDegrees = (minutes/60) * 360;
    minEl.style.transform = "rotate(" + minDegrees + "deg)";
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
    }
}

var hourRotation = function() {
    var hourDegrees = (hours/12) * 360;
    hourEl.style.transform = "rotate(" + hourDegrees + "deg)";  
    hours++;
    if (hours >= 60) {
        hours = 0;
    }
}

setInterval(secondRotation, 200); // No need for the parentheses after the secondRotation function since setInterval takes in a function
setInterval(minuteRotation, 500);
setInterval(hourRotation, 1000);


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

