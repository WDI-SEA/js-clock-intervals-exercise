var degrees = 6;
var minDegrees = degrees / 60;
var hourDegrees = degrees / (60 * 60);
var currentTime = new Date(Date.now());
var count = currentTime.getSeconds() + (currentTime.getMinutes() * 60) + (currentTime.getHours() * 3600);

var rotation = function() {
  count ++;
  var secondHand = document.getElementById("second");
  secondHand.style.transform = "rotate(" + degrees * count + "deg)";
  var minuteHand = document.getElementById("minute");
  minuteHand.style.transform = "rotate(" + minDegrees * count + "deg)";
  var hourHand = document.getElementById("hour");
  hourHand.style.transform = "rotate(" + hourDegrees * count + "deg)";
}

var timer = setInterval(rotation, 1000);