
var seconds = document.getElementById("second");
var minutes = document.getElementById("minute");
var hours = document.getElementById("hour");

var sdegrees = 0;
var mdegrees = 0;
var hdegrees = 0;

setInterval(function() {
    seconds.style.transform = "rotate(" + sdegrees + "deg)";
    sdegrees = sdegrees + 6;
}, 1000);

setInterval(function() {
    minutes.style.transform = "rotate(" + mdegrees + "deg)";
    mdegrees = mdegrees + 6;
}, 60000);

setInterval(function() {
    hours.style.transform = "rotate(" + hdegrees + "deg)";
    hdegrees = hdegrees + 30;
}, 3600000);




