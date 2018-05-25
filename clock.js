document.addEventListener("DOMContentLoaded", function() {

var rotateHands = function() {
  // date object with current time
  var currentTime = new Date;
  
  // create object that stores second, minute, and hour
  handPositions = {
    second: 6 * currentTime.getSeconds(),
    minute: 6 * (currentTime.getMinutes() + (currentTime.getSeconds() / 60)),
    hour: (60 * currentTime.getHours() + currentTime.getMinutes()) * 0.5
  };
  return handPositions;
};

var clockHands = document.getElementsByClassName("hand");

var advanceClock = function () {
  var handPositions = rotateHands();
  // iterate over the three hands and rotate each one based on the handPositions object
  for (var i = 0; i < clockHands.length; i++) {
    clockHands[i].style.transform = "rotate(" + handPositions[clockHands[i].id] + "deg)";
  };
};
window.setInterval(advanceClock, 1000);
});
