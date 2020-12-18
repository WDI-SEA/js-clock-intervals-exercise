//var degrees = 45;
//
//var el = document.getElementById("myElement");
//el.style.transform = "rotate(" + degrees + "deg)";
//
//secondRotation(0); // returns 0
///secondRotation(59); // returns (59 / 60) * 360
//
//hourRotation(12); // returns 0
//hourRotation(5);

var secondsHand = document.getElementById("second");
var minutesHand = document.getElementById('minute');
var hoursHand = document.getElementById('hour');

setInterval(function() {
    minutesHand.style.transform = "rotate(90deg)";
    hoursHand.style.transform = "rotate(90deg)"; 
    secondsHand.style.transform = "rotate(90deg)";
},1000)
