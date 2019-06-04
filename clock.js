var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

var seconds = 0;
var minutes = 0;
var hours = 0;

function secondRotation() {
    seconds = seconds + 1;
    var degrees = (seconds/60) * 360;
    secondHand.style.transform = "rotate(" + degrees + "deg)";
    if (seconds === 61) {
        seconds = 1;
    }
};

function minuteRotation () {
    minutes = minutes + 1;
    var degrees = (minutes/60) * 360;
    minuteHand.style.transform = "rotate(" + degrees + "deg)";
    if (minutes === 61) {
        minutes = 1;
    }
};

function hourRotation () {
    hours = hours + 1
    var degrees = (hours/12) * 360;
    hourHand.style.transform = "rotate(" + degrees + "deg)";
    if (hours === 13) {
        hours = 1;
    }
};

setInterval(secondRotation, 1000);
setInterval(minuteRotation, 60000);
setInterval(hourRotation, 3600000);
