
// var second = document.getElementById("second");
// var minute = document.getElementById("minute");
// var hour = document.getElementById("hour");
// // second.style.transform = "rotate(" + degrees + "deg)";
// // minute.style.transform = "rotate(" + degrees + "deg)";
// // minute.style.transform = "rotate(" + degrees + "deg)";

function secondRotation(s) {
  return (s / 60) * 360;

}
function hourRotation(h) {

  return (h / 12) * 360;

}
function minRotation(m) {

  return (m / 12) * 360;

}
// function minRotation(m) {
//     var mindegree = (m/60) * 360;
//     return mindegree;
// // secondRotation(45);
// // hourRotation(10);
// // minRotation(30);
// //     hour.style.transform = "rotate(" + hrdegree + "deg)";
// //     minute.style.transform = "rotate(" + mindegree + "deg)";
// //     second.style.transform = "rotate("+ secdegree + "deg)";
// //  var date = new Date();
// //  let hr = date.getHours();
// //  let min = date.getMinutes();
// //  let sec = date.getSeconds();
// //  console.log("Hour: " + hr +" Minute: "+ min + " Second: " + + sec);
function run_the_clock() {
  var date = new Date();
  var hr = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  // var hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  // var minPosition = (min * 360/60) + (sec* 360/60)/60;
  // var secPosition = sec * 360/60;

  var second = document.getElementById("second");
  var minute = document.getElementById("minute");
  var hour = document.getElementById("hour");

  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  hour.style.transform = "rotate(" + hourRotation(hr)  + "deg)";
  minute.style.transform = "rotate(" + minRotation(min) + "deg)";
  second.style.transform = "rotate(" + secondRotation(sec) + "deg)";
}
var interval = setInterval(run_the_clock, 1000);