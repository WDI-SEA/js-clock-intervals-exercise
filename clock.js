var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var e = 0;



setInterval(secondRotation, 1000);

setInterval(minuteRotation, 60000);

setInterval(hourRotation, 3600000);


//Additional Functions
function secondRotation() {
    var degrees = (e / 60) * 360
    second.style.transform = "rotate(" + degrees + "deg)";
    e++;
}

function minuteRotation() {
    var degrees = (e / 60) * 360
    minute.style.transform = "rotate(" + degrees + "deg)";
    e++;
}

function hourRotation() {
    var degrees = (e / 12) * 360
    hour.style.transform = "rotate(" + degrees + "deg)";
    e++;
}