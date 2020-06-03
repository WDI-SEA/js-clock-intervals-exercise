var sHand;
var mHand;
var hHand;

var seconds = 0;
var minutes = 0;
var hours = 0;

function secondRotation(seconds) {
  return (seconds / 60) * 360;
}

function minuteRotation(minutes, seconds) {
  var wholeMinutes = (minutes / 60) * 360;
  var subMinutes = (seconds / 3600) * 360;
  return wholeMinutes + subMinutes;
}

function hourRotation(hours, minutes) {
  var wholeHours = (hours / 12) * 360;
  var subHours = (minutes / 720) * 360;
  return wholeHours + subHours;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 12) {
    hours = 0;
  }

  sHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";
  mHand.style.transform = "rotate(" + minuteRotation(minutes, seconds) + "deg)";
  hHand.style.transform = "rotate(" + hourRotation(hours, minutes) + "deg)";
}

document.addEventListener('DOMContentLoaded', function() {

  var now = new Date();

  minutes = now.getMinutes();
  seconds = now.getSeconds();
  //  This
  hours = now.getHours() >= 12 ? now.getHours() - 12 : now.getHours();

  // Is the same as This
  // if (now.getHours() >= 12) {
  //   hours = now.getHours() - 12
  // } else {
  //   hours = now.getHours()
  // }

  sHand = document.getElementById("second");
  mHand = document.getElementById("minute");
  hHand = document.getElementById("hour");

  var intervalId = setInterval(tick, 1000);

});