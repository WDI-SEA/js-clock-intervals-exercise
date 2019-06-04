// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

var imgHour = document.getElementById('hour');
var imgMin = document.getElementById('minute');
var imgSec = document.getElementById('second');

var degrees = 360;

  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    now.textContent = h+ ":" + m + ":" + s;
  }
  setInterval(time, 1000);
  
var second = 1;
function rotateSec() {
  var secDeg = (second/60)*360;
  imgSec.style.transform = "rotate(" + secDeg + "deg)";
  second++;
  console.log(second);
   if (second >= 60) {
    second = 0;
   }
}
setInterval(rotateSec, 1000);

var minute = 1;
function rotateMin() {
  var minDeg = (minute/60) * 360;
  imgMin.style.transform = "rotate(" + minDeg + "deg)";
  minute++;
  console.log(minute);
  if (minute >= 60) {
    minute = 0;
   }
}
setInterval(rotateMin, 60000);

var hour = 1;
function rotateHour() {
  var hourDeg = (hour/12) * 360;
  imgHour.style.transform = "rotate(" + hourDeg + "deg)";
  console.log(hour);
  hour++;
  if (hour >= 12) {
    hour = 0;
   }
}

setInterval(rotateHour, 3600000);


