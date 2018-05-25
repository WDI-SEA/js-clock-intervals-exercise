window.setInterval(advanceClock, 1000);

var handRotation = function() {
  // create date object with current time
  var today = new Date;
  
  // create object that stores second, minute, and hour
  handPositions = {
    second: (today.getSeconds() / 60) * 360,
    minute: (6 * (today.getMinutes() + (today.getSeconds() / 60))), //(today.getMinutes() / 60) * 360,
    hour: (60 * today.getHours() + today.getMinutes()) * 0.5
  };
  return handPositions;
};

// select all hands - but not the background image
var clockHands = document.getElementsByClassName("hand");

// advance the hands 
var advanceClock = function () {
  var handPositions = handRotation();
  // iterate over the three hands and rotate each one based on the handPositions object
  for (var i = 0; i < clockHands.length; i++) {
    clockHands[i].style.transform = "rotate(" + handPositions[clockHands[i].id] + "deg)";
  };
};