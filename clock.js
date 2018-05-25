//getting the date
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

//setting the degrees
var secDegrees = ((second / 60) * 360);
var minDegrees = ((minute / 60) * 360) + ((second/60)*6);
var hourDegrees = ((hour / 12) * 360) + ((minute/60)*30);

// getting the hand elements and rotating the hands using transform
function minTick() {
  let date = new Date();
  var minute = date.getMinutes();
  var minDegrees = ((minute / 60) * 360) + ((second/60)*6);
  var minuteHand = document.querySelector("#minute");
  minuteHand.style.transform = "rotate(" + minDegrees + "deg)";
}
function hourTick() {
  let date = new Date();
  hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  hourDegrees = ((hour / 12) * 360) + ((minute/60)*30);
  var hourHand = document.querySelector("#hour");
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
}
function secTick() {
  let date = new Date();
  second = date.getSeconds();
  secDegrees = ((second / 60) * 360);
  var secondHand = document.querySelector("#second");
  secondHand.style.transform = "rotate(" + secDegrees + "deg)";
}
//keeping the clock moving

setInterval(secTick, 500);
setInterval(minTick, 10000);
setInterval(hourTick, 20000);

//setting initial hand positions
hourTick();
minTick();
secTick();
