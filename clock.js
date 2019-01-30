

var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
var sdegrees = 0;
var mdegrees = 0;
var hdegrees = 0;

setInterval(function() {
    secondHand.style.transform = "rotate(" + sdegrees + "deg)";
    sdegrees = sdegrees + 6;
}, 1000);

setInterval(function() {
    minuteHand.style.transform = "rotate(" + mdegrees + "deg)";
mdegrees = mdegrees + 6;
}, 60000);

setInterval(function() {
 hourHand.style.transform = "rotate(" + hdegrees + "deg)";
 hdegrees = hdegrees = 6;
}, 3600000);





