//second hand 1000 milliseconds
//minute hand 60000 milliseconds
//hour hand 3600000 milliseconds

//360 degrees in circle
//60 ticks on a clockface
//rotate 360/60 every tick
//reset when it gets back to 0

//stack images clock body > hour hand > minute hand > second hand

//second hand is what you can derive all of the other angles from

//it's possible and preferred to do this with one single interval (rather than
///3 for each individual hand)

document.addEventListener('DOMContentLoaded', function() {

var interval = setInterval(startTime, 1000);

function secondRotation(seconds) {
  return (seconds / 60) * 360;
}

function minuteRotation(minutes) {
  return (minutes / 60) * 360;
}

function hourRotation(hours) {
  return (hours/ 12) * 360;
}

function updateTime() {
  document.getElementById("second").style.transform = "rotate(" + secondRotation(27) + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minuteRotation(52) + "deg)";
  document.getElementById("hour").style.transform = "rotate(" + hourRotation(8) + "deg)";
  console.log("updated time");
}

})
