// declare variables to hold DOM elements

var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

// set functions to calculate degree placement based off current time

var hourDegree = function(hour) {
    return (hour / 12) * 360;
}

var minuteDegree = function(minute) {
    return (minute / 60) * 360;
}

var secondDegree = function(second) {
    return (second / 60) * 360;
}

//initialize clock with current time

var initClock = function () {
  currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();
  var secondsDegree = secondDegree(second);
  var minutesDegree = minuteDegree(minute);
  var hoursDegree = hourDegree(hour);
  hourHand.style.transform = 'rotate(' + hoursDegree + 'deg)';
  minuteHand.style.transform = 'rotate(' + minutesDegree + 'deg)';
  secondHand.style.transform = 'rotate(' + secondsDegree + 'deg)';
}
// ensure DOM is loaded for up to date time retrieval

document.addEventListener('DOMContentLoaded',function() {
  initClock();
  updateTime();

} )

// function to continuosly check the time and update DOM at
// given interval

var updateTime = function () {
var interval;
clearInterval(interval);
interval = setInterval(initClock, 1000);
}







// CLOCK LOGIC WITHOUT CURRENT TIME / INTERVALS ONLY -->

// var secondsDegree = 6;
// var minutesDegree = 6;
// var hoursDegree = 15;


// var secInterval;
// clearInterval(secInterval);
// secInterval = setInterval(function(){
//     secondHand.style.transform = 'rotate(' + secondsDegree + 'deg)';
//     secondsDegree = secondsDegree + 6;
// }, 1000);

// var minInterval;
// clearInterval(minInterval);
// minInterval = setInterval(function(){
//     minuteHand.style.transform = 'rotate(' + minutesDegree + 'deg)';
//     minutesDegree = minutesDegree + 6;
// }, 60000);

// var hourInterval;
// clearInterval(hourInterval);
// hourInterval = setInterval(function(){
//     hourHand.style.transform = 'rotate(' + hoursDegree + 'deg)';
//     hoursDegree = hoursDegree + 15;
// }, 3600000);




