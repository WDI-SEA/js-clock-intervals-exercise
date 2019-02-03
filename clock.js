// REFACTORED Clock: with hour hand changing .5deg/minute
// and smooth sweep second hand
// used document.onLoad to start the clock - perhaps poor practice?
// put DOM and time variables in arrays and called the DOM array
// (clockHands) in the DOM update statements by each array member
// CSS rotation results in strange resetting behavior
// due to time set in seconds vs. milleseconds

document.onLoad = browserClock();

function browserClock() {
    clock();
    setInterval(clock, 1000);
}
function clock() {
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockHands = [document.getElementById("hour"), document.getElementById("minute"), document.getElementById("second")];
    var hour = (time[1] / 2) + (time[0] * 30);


    clockHands[0].style.transform = ("rotate(" + hour + "deg)");
    clockHands[1].style.transform = ("rotate(" + time[1] * 6 + "deg)");
    clockHands[2].style.transform = ("rotate(" + time[2] * 6 + "deg)");
}

// ORIGINAL CLOCK CODE WITHOUT CURRENT TIME
// This is a mess, but it's better than
// the below example that uses current time

// var hour = document.getElementById("hour");
// var minute = document.getElementById("minute");
// var second = document.getElementById("second");

// Variables set to ) for seconds, minutes & hours
// var sec = 0;
// var min = 0;
// var hr = 0;

// var el = document.getElementById("myElements");
// el.style.transform = "rotate(" + degrees + "deg)";

// var secondSweep = setInterval(function() {
//     if (currentSec < 59) {
//         sec++;
//     } else {
//         sec = 0;
//     }
//     // console.log("tick", sec);
//     //transform
//     second.style.transform = ("rotate(" + sec / 60 * 360 + "deg)" )
//     },1000)
// change above to separate variable

// var minuteHand = setInterval(function () {
//     if (min < 59) {
//         min++;
//     } else {
//         min = 0;
//     }
//     console.log("tock", min);
//     //transform
//     minute.style.transform = ("rotate(" + min / 60 * 360 + "deg)")
// }, 60000)

// var hourHand = setInterval(function () {
//     if (hr < 11) {
//         hr++;
//     } else {
//         hr = 0;
//     }
//     console.log("tick", hr);
//     //transform
//     hr.style.transform = ("rotate(" + hr / 12 * 360 + "deg)")
// }, 3600000)

// CLOCK CODE WITH CURRENT TIME
// clumsy implementation
// hour hand jumps to new hour

// var secToDegrees = function (sec) {
//     var secDegrees = (currentSec / 60) * 360;
//     return secDegrees;
//     console.log(secToDegrees);
// }
// var MinToDegrees = function (Min) {
//     var MinDegrees = (currentMin / 60) * 360;
//     return MinDegrees;
// }
// var hrsToDegrees = function (hrs) {
//     var hrsToDegrees = (30 * currentHr % 12) + currentMin / 2;
//     return hrsToDegrees;
//     // var hrsToDegrees = Math.abs(hrsToDegrees - secOrMinDegrees);    
//     // return hrsToDegrees - Math.min(360 - hrsToDegrees, hrsToDegrees);
// }

// var fullClockTick = setInterval(function () {
//     timer = new Date();
//     currentSec = timer.getSeconds();
//     currentMin = timer.getMinutes();
//     currentHr = timer.getHours();
// });

// var ticker = function () {
// setInterval(ticker, 1000);
// }
// ticker();
