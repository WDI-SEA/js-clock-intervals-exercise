var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var secondHand = document.getElementById('second');

function windClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hour = (hr * 360 / 12);
    let minute = (min * 360 / 60);
    let second = (sec * 360 / 60);

    function rotateSecond() {
        secondHand.style.transform = "rotate(" + second + "deg)";
    }
    rotateSecond();

    function rotateMinute() {
        minuteHand.style.transform = "rotate(" + minute + "deg)";
    }
    rotateMinute();
    function rotateHour() {
        hourHand.style.transform = "rotate(" + hour + "deg)";
    }
    rotateHour();
}

var interval = setInterval(windClock, 1000);

// var degrees = .1;
// var el = document.getElementById("second");
// el.style.transform = "rotate(" + degrees + "deg)"
// var secondDegrees = 1;
// var minuteDegrees = 1;
// var hourDegrees = 1;

// var intervalHandle = setInterval(function(){

//     secondHand.style.transform = rotate(6 + deg);
// }, 1000);

// setInterval();



// var seconds = 0;
// var minutes = 0;
// var hours = 0;

// var sHand;
// var mHand;
// var hHand;

// var seconds = 0;
// var minutes = 0;
// var hours = 0;

// function secondRotation(seconds){
//     return (seconds / 60) * 360;
// }

// function minuteRotation(minutes, seconds) {
//     var wholeMinutes = (minutes / 60) * 360;
//     return wholeMinutes;
// }

// function hourRotation(hours, minutes){
//     var wholeHours = (hours / 12) * 360;
//     return wholeHours;
// }

// function tick() {
//     seconds++; 
//     if(seconds === 60) {

//     }
// }




// sHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";
// mHand.style.transform = "rotate(" + minuteRotation(minutes, seconds) + "deg)";
// hHand.style.transform = "rotate(" + hourRotation(hours, minutes) + "deg)";




// setInterval(secondRotation, 1000);
// var secondHand = document.getElementById("second");
// function secondRotation() {
//   seconds = seconds + 1;
//   var degrees = (seconds/60) * 360;
//   secondHand.style.transform = "rotate(" + degrees + "deg)";
//   if (seconds === 60) {
//     seconds = 0;
//   }
// };

// var minuteHand = document.getElementById("minute");
// function minuteRotation() {
//   minutes = minutes + 1;
//   var degrees = (minutes/60) * 360;
//   minuteHand.style.transform = "rotate(" + degrees + "deg)";
//   if (seconds === 60) {
//     seconds = 0;
//   }
//   setInterval(minuteRotation, 60000);

// };

// var hourHand = document.getElementById("hour");
// function hourRotation(){
//     hour = hour + 1;
//     var degrees = (hours/12) * 360;
//     hourHand.style.transform = "rotate(" + degrees + "deg)";
//     if(hours === 12){
//         hours = 0;
//     }
//     setInterval(hourRotation, 720000)

// }



