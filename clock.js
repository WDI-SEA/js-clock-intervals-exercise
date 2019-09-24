var now = new Date();
var nowHour = now.getHours();
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var hourDegrees = 0;
var minuteDegrees = 0;
var secondDegrees = 0;
const hourRotation = 360 / 12 / 60 / 60;
const minuteRotation = 360 / 60 / 60;
const secondRotation = 360 / 60;
//hour = 0.00833333333 degree movement per second
function hourTransform(){
    hourDegrees = hourDegrees + hourRotation;
    hour.style.transform = "rotate(" + hourDegrees + "deg)";
}
//minute = .5 degrees per second
function minuteTransform(){
    minuteDegrees = minuteDegrees + minuteRotation;
    minute.style.transform = "rotate(" + minuteDegrees + "deg)";
}
//second = 6 degrees per second
function secondTransform(){ 
    secondDegrees = secondDegrees + secondRotation;
    second.style.transform = "rotate(" + secondDegrees + "deg)";
}
setInterval(secondTransform ,1000);
setInterval(minuteTransform ,1000);
setInterval(hourTransform ,1000);




