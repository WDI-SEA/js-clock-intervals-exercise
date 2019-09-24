// Get DOM elements
const hourHand = document.getElementById("hour"),
  minuteHand = document.getElementById("minute"),
  secondHand = document.getElementById("second");

  // Get current time
  let hour = new Date().getHours(),
    minute = new Date().getMinutes(),
    second = new Date().getSeconds(),
    // Convert current hour to deg
    hourDeg = ((1 / 12) * 360),
    minuteDeg = ((1 / 60) * 360),
    secondDeg = ((1 / 60) * 360);

  console.log(hour);
  console.log(minute);
  console.log(second);

setInterval (function() {
  hourHand.style.transform = "rotate(" + hourDeg + "deg)";
  hourDeg = hourDeg + 6;
}, 3600000);

setInterval (function() {
  minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
  minuteDeg = minuteDeg + 6;
}, 60000);

setInterval (function() {
  secondHand.style.transform = "rotate(" + secondDeg + "deg)";
  secondDeg = secondDeg + 6;
}, 1000);