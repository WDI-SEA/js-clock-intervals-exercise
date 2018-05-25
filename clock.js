
var time = new Date();
var secondhand = time.getSeconds();
var minutehand = time.getMinutes();
var hourhand = time.getHours();
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

var initialize = function() {
  second.style.transform = "rotate(" + (secondhand * 6) + "deg)";
  minute.style.transform = "rotate(" + (minutehand * 6) + "deg)";
  hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
  }

initialize();

setInterval(function () {
  secondhand += 1;
  second.style.transform = "rotate(" + (secondhand * 6) + "deg)";
  }, 1000);

setInterval(function () {
  minutehand += (6/60);
  minute.style.transform = "rotate(" + (minutehand * 1) + "deg)";
  }, 1000);

setInterval(function () {
  hourhand += (30/3600);
  hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
  }, 1000);
