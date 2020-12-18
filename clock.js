//var degrees = 45;
//
//var el = document.getElementById("myElement");
//el.style.transform = "rotate(" + degrees + "deg)";
//
//secondRotation(0); // returns 0
//secondRotation(59); // returns (59 / 60) * 360
//
//hourRotation(12); // returns 0
//hourRotation(5);

var secondsHand = document.getElementById("second");
var minutesHand = document.getElementById('minute');
var hoursHand = document.getElementById('hour');

let secondCount = 6;
let minuteCount = .1;
let hourCount = .00833333;

let secondRotation = 0;
let minuteRotation = 0;
let hourRotation = 0;

setInterval(function() {
    secondsHand.style.transform = "rotate(" + (secondRotation += secondCount) + "deg)";
    minutesHand.style.transform = "rotate(" + (minuteRotation += minuteCount) + "deg)"; 
    hoursHand.style.transform = "rotate(" + (hourRotation += hourCount) + "deg)";
},1000)
