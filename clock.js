// Get DOM elements
const hourHand = document.getElementById("hour"),
  minuteHand = document.getElementById("minute"),
  secondHand = document.getElementById("second");

  // Get current time
  let hour = new Date().getHours(),
    minute = new Date().getMinutes(),
    second = new Date().getSeconds(),
    // Convert current hour to deg
    hourDeg = hour * 30,
    minuteDeg = minute * 6,
    secondDeg = second * 6;

setInterval (function() {
  hourHand.style.transform = "rotate(" + hourDeg + "deg)";
  hourDeg = hourDeg + 0.0083333333;
  minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
  minuteDeg = minuteDeg + 0.1;
  secondHand.style.transform = "rotate(" + secondDeg + "deg)";
  secondDeg = secondDeg + 6;
}, 1000);