var secDeg = 6;
var minDeg = .1;
var hrDeg = 0.00833333333;

var sec = document.getElementById("second");
// el.style.transform = "rotate(" + secDeg + "deg)";
var min = document.getElementById("minute");
var hr = document.getElementById("hour");

setInterval(function(){
  sec.style.transform = "rotate(" + secDeg + "deg)";
  secDeg += 6
  min.style.transform = "rotate(" + minDeg + "deg)";
  minDeg += .1
  hr.style.transform = "rotate(" + hrDeg + "deg)";
  hrDeg += 0.00833333333
}, 1000);

// setInterval(function(){
//   min.style.transform = "rotate(" + minDeg + "deg)";
//   minDeg += .1
// }, 1000);
//
// setInterval(function(){
//   hr.style.transform = "rotate(" + hrDeg + "deg)";
//   hrDeg += 0.00833333333
// }, 1000);
