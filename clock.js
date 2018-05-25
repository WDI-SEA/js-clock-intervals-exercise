var degsec = 6;
var degmin = .1;
var deghr = 0.00833333333;

// var sec = document.getElementById('second');
// sec.style.transform = "rotate(" + degrees + "deg)";

// var hourRotation = function(hours) {

// }

var announce = function() {
  var sec = document.getElementById('second');
  second.style.transform = "rotate(" + degsec + "deg)";
  degsec += 6;
}
sec = setInterval(announce, 1000);

var announce2 = function() {
  var min = document.getElementById('minute');
  minute.style.transform = "rotate(" + degmin + "deg)";
  degmin += .1;
}
min = setInterval(announce2, 1000);

var announce3 = function() {
  var hr = document.getElementById('hour');
  hour.style.transform = "rotate(" + deghr + "deg)";
  deghr += 0.00833333333;
}
hr = setInterval(announce3, 1000);





//hour hand should rotate once per 12 hours 0.00833333333 deg per sec
//min hand should rotate once per hour .1 degree per second
//second hand should rotate once per minute 6degrees per second

//for each second rotate the hour hand 0.00833333333
//minute hand .1 deg
//senond hand 6 deg