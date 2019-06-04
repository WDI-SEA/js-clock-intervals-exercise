// // clock time 
// Create a webpage that displays a clock where the second, minute, and hour hands tick.

// Write CSS to have the clock face, second, minute, hour hands all display correctly on top of each other. Make sure the red second hand displays on top of the minute and hour hand. (Try changing the order the div elements are written in the HTML)

// Create intervals in the JavaScript file to make the clocks tick.

// Use CSS transform rotation to rotate the hands of the clock.

// #myElement {
//   transform: rotate(45deg);
// }
// Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:

// var degrees = 45;

// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";
// It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!

// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

// position relative or absolute to stack on top of each other 

var clockImg = document.getElementById("image");
var clockFace= document.getElementById("face");
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var secondHand = document.getElementById("second");

var second = 1; 
var minute = 1;
var hour = 1;

function rotateSec() {
    var secDeg = (second / 60 * 360);
    secondHand.style.transform = "rotate(" + secDeg + "deg)";
    second++;
    console.log(second);
    if (second >= 60) {
        second = 0;
    }
};
setInterval(rotateSec, 1000);

function rotateMin() {
    var minDeg = (minute / 60 * 360);
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
    minute++;
    console.log(minute);
    if (minute >= 60) {
        minute = 0;
    }
};
setInterval(rotateMin, 60000);

function rotateHour() {
    var hourDeg = (hour / 12 * 360);
    hourHand.style.transform = "rotate(" + hourDeg + "deg)";
    hour++;
    console.log(hour);
    if (hour >= 12) {
        hour = 0;
    }
};
setInterval(rotateHour, 3600000);

var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);