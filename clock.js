//getting the date
var date = new Date();
var hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
var minute = date.getMinutes();
var second = date.getSeconds();
console.log(hour + '\:' + minute + '\:' + second);
//setting the degrees
var secDegrees = ((second / 60) * 360);
var minDegrees = ((minute / 60) * 360) + ((second/60)*6);
var hourDegrees = ((hour / 12) * 360) + ((minute/60)*30);
// getting the hand elements

// rotating the hands using transform
function minTick() {
  let date = new Date();
  var minute = date.getMinutes();
  var minDegrees = ((minute / 60) * 360) + ((second/60)*6);
  var mins = document.querySelector("#minute");
  mins.style.transform = "rotate(" + minDegrees + "deg)";
}
function hourTick() {
  let date = new Date();
  hour = date.getHours();
  hourDegrees = ((hour / 12) * 360) + ((minute/60)*30);
  var hours = document.querySelector("#hour");
  hours.style.transform = "rotate(" + hourDegrees + "deg)";
}
function secTick() {
  let date = new Date();
  second = date.getSeconds();
  secDegrees = ((second / 60) * 360);
  var secs = document.querySelector("#second");
  secs.style.transform = "rotate(" + secDegrees + "deg)";
}
function shitBrick() {
  console.log('shit a brick');
}
//setting initial hand positions
setInterval(secTick, 500);
setInterval(minTick, 10000);
setInterval(hourTick, 20000);
hourTick();
minTick();
secTick();
