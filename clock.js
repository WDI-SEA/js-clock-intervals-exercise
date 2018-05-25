//if js is in html head
//document.addEventListener document loaded


// Degrees of rotation for each hand on the clock
var degrees = 6;
var minDegrees = degrees / 60;
var hourDegrees = degrees / (60 * 60);

// Start clock at current time
var currentTime = new Date(Date.now());


// Rotate the hands on the clock
var count = currentTime.getSeconds() + (currentTime.getMinutes() * 60) + (currentTime.getHours() * (12 * 3600));

var rotation = function() {
  count ++;
  var secondHand = document.getElementById("second");
  secondHand.style.transform = "rotate(" + degrees * count + "deg)";
  var minuteHand = document.getElementById("minute");
  minuteHand.style.transform = "rotate(" + minDegrees * count + "deg)";
  var hourHand = document.getElementById("hour");
  hourHand.style.transform = "rotate(" + hourDegrees * count + "deg)";
}

// Rotate the hands at a set interval
var timer = setInterval(rotation, 1000);