// getting the hand elements and rotating the hands using transform

function minTick() {
  let date = new Date(); //getting the date
  var minute = date.getMinutes(); //getting the minutes
  var minDegrees = ((minute / 60) * 360) + ((second/60)*6); // converting minutes to degrees
  var mins = document.querySelector("#minute"); //selecting the minute hand
  mins.style.transform = "rotate(" + minDegrees + "deg)"; // rotating hand to correct position
}
//same for hours
function hourTick() {
  let date = new Date();
  hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  hourDegrees = ((hour / 12) * 360) + ((minute/60)*30);
  var hours = document.querySelector("#hour");
  hours.style.transform = "rotate(" + hourDegrees + "deg)";
}
// same for seconds
function secTick() {
  let date = new Date();
  second = date.getSeconds();
  secDegrees = ((second / 60) * 360);
  var secs = document.querySelector("#second");
  secs.style.transform = "rotate(" + secDegrees + "deg)";
}
//keeping the clock moving

setInterval(secTick, 500);
setInterval(minTick, 10000);
setInterval(hourTick, 20000);

//setting initial hand positions
hourTick();
minTick();
secTick();
