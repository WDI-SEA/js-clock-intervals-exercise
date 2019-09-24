//Constants
const hourRotation = 360 / 12 / 60 / 60;
const minuteRotation = 360 / 60 / 60;
const secondRotation = 360 / 60;
//Variables
var now = new Date();
var nowHour = now.getHours();
var nowMinutes = now.getMinutes();
var nowSeconds = now.getSeconds();
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var hourDegrees = (nowHour * 30) + (nowMinutes * .5) + (nowSeconds * hourRotation);
var minuteDegrees = (nowMinutes * 6) + (nowSeconds * minuteRotation);
var secondDegrees = (nowSeconds * secondRotation);

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




