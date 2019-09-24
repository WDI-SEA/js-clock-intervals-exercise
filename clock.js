
//DOM elements
var hourHand = document.getElementById('hour')
var minuteHand = document.getElementById('minute')
var secondHand = document.getElementById('second')

//new date
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();

//define degrees rotation. We can increment each degree with the set interval function
var hoursDegrees = hours * 30 + (minutes / 2) + (seconds * .008333333);
var minutesDegrees = minutes * 6 + (seconds * .1);
var secondsDegrees = seconds * 6;

//Set interval function
setInterval (function() {
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
    hoursDegrees = hoursDegrees + .0083333333;
    minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    minutesDegrees = minutesDegrees + .1;
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    secondsDegrees = secondsDegrees + 6;
}, 1000);
