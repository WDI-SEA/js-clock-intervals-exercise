//Global variables:
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
//var degrees = 45;

var interval = setInterval(runClock, 1000);

function runClock() {
  var now = new Date();

  var second = now.getSeconds();
  var minute = now.getMinutes();
  var hour = now.getHours();
  
  //convert seconds, minutes and hours to degrees:
  var secondRotation = second * 6; // --> seconds * 360degrees/60 seconds
  var minuteRotation = (minute * 6) + (second * 0.1);// --> minutes * 360/degrees/60minutes) + (seconds * (360deg/60minutes)* (1 minute/60 seconds)
  var hourRotation = (hour * 30) + (minute * 0.5);//--> hours * 360deg/12hours) + (minutes * 360deg/12hours)*(1 hour/60min)

  secondHand.style.transform = "rotate(" + secondRotation + "deg)";
  minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
  hourHand.style.transform = "rotate(" + hourRotation + "deg)";

//setTimeout(runClock, 6000);
};



