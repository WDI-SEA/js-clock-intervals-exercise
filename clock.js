console.log("testing, testing, testing!")

//variables for each hand
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var sec = 0;
var min = 0;
var hr = 0;


// Clock functions without current time

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
//     console.log("tick", min);
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

// Clock with current time

//make the below locally scoped

// var interval = clearInterval();
var timer = new Date();
var currentSec = timer.getSeconds();
var currentMin = timer.getMinutes();
var currentHr = timer.getHours();

var fullClockTick = setInterval(function(){
    // var interval = clearInterval ();
    timer = new Date();
    currentSec = timer.getSeconds();
    currentMin = timer.getMinutes();
    currentHr = timer.getHours();
    ticker();
},1000);

var secMinToDegrees = function(secOrMin) {
    var secOrMinDegrees = (secOrMin / 60) * 360;
    return secOrMinDegrees;
}

var hrsToDegrees = function (hrs) {
    var hrsToDegrees = (hrs / 12) * 360;
    return hrsToDegrees;
    // var hrsToDegrees = Math.abs(hrsToDegrees - secOrMinDegrees);    
    // return hrsToDegrees - Math.min(360 - hrsToDegrees, hrsToDegrees);
}

var ticker = function () {
    second.style.transform = ("rotate(" + secMinToDegrees(currentSec) + "deg)" );
    minute.style.transform = ("rotate(" + secMinToDegrees(currentMin) + "deg)" );
    hour.style.transform = ("rotate(" + hrsToDegrees(currentHr) + "deg)" );
}

// stack pngs of clock face, hour hand, minute hand, and second hand
// create JS DOM functions to update the clock's hands from browser time
// set up three DOM selectors for hour, minute, and second

//Hour hand formulas
// def clockangles(hour, minute):
// ans = abs((hour * 30 + minute * 0.5) - (minute * 6))
// return min(360 - ans, ans)