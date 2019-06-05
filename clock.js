var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var e = 0;



setInterval(secondRotation, 1000);

setInterval(minuteRotation, 60000);

setInterval(hourRotation, 3600000);
//doing 3 intervals will get out of sync even faster. nothing happens at same time in js.

//Additional Functions
//declare function outside so that its global
function secondRotation() {
    var degrees = (e / 60) * 360
    second.style.transform = "rotate(" + degrees + "deg)";
    e++;
}

function minuteRotation() {
    var degrees = (e / 60) * 360
    minute.style.transform = "rotate(" + degrees + "deg)";
    e++;
}

function hourRotation() {
    var degrees = (e / 12) * 360
    hour.style.transform = "rotate(" + degrees + "deg)";
    e++;
}
    
//Date
function windUpClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
}

//TEACHERS ANSWER
// document.addEventListener('DOMContent', function() {
//     var now = new Date();
//     //library called moment that makes date easier

//     minutes = now.getMinutes();
//     seconds = now.getSeconds();
//     hours = now.getHours() >=12 ? now.getHiyrs() - 12 : now.getHours();

//     sHand = document.getElementById("second");
//     mHand = document.getElementById("minute");
//     hHand = document.getElementById("hour");

//     mBox = document.getElementById('monthbox');
//     dBox = document.getElementById('daybox');
//     yBox = document.getElementById('yearbox');

// });

