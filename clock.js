
// second hand
var degreesSec = 0;
var moveSecondHand = function () {
  // not sure why 6 did not work (360/60=6)
  degreesSec += 3;
  var secondHand = document.getElementById("second");
  secondHand.style.transform = "rotate(" + degreesSec + "deg)";
}

var oneSecondInterval = setInterval (moveSecondHand, 1000);


// minute hand
var degreesMin = 0;
var moveMinuteHand = function () {
  degreesMin += 3;
  var minuteHand = document.getElementById("minute");
  minuteHand.style.transform = "rotate(" + degreesMin + "deg)";
}

var oneMinuteInterval = setInterval (moveMinuteHand, 60000);


// hour hand
var degreesHour = 0;
var moveHourHand = function () {
  // 30 degrees every hour ?
  degreesHour += 30;
  var hourHand = document.getElementById("hour");
  hourHand.style.transform = "rotate(" + degreesHour + "deg)";
}

var oneHourInterval = setInterval (moveHourHand, (60000 * 60));
