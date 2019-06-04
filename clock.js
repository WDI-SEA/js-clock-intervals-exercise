//* variable field
var realHour;
var realMin;
var realSec;
var now;
var realTimeHandle = setInterval(function(){
    now = new Date();
    realHour = now.getHours();
    realMin = now.getMinutes();
    realSec = now.getSeconds();
    // console.log(realHour, realMin, realSec);
}, 500);
var clockHandle = setInterval(updateClocks, 1000);



//*element field
var digitMinEls = document.getElementsByClassName('min');
var digitSecEls = document.getElementsByClassName('sec');
var digitUTCHEl = document.getElementById('UTChour');
var digitPSTHEl = document.getElementById('PSThour');
var analogHourEl = document.getElementById('hour');
var analogMinEl = document.getElementById('minute');
var analogSecEl = document.getElementById('second');
console.log(digitUTCHEl,digitPSTHEl);
console.log(analogSecEl, analogHourEl);



//*function field
//todo action for all clock control
function updateClocks() {
    updateDigitClocks();
    updateAnalogClock();
}

//todo actions for synchro digit clocks
function updateDigitClocks() {
    for (let clock of digitSecEls) {
        if (realSec >= 10) {
            clock.textContent = realSec;
        } else {
            clock.textContent = '0' + realSec;
        }
        
    };

    for (let clock of digitMinEls) {
        if (realMin >= 10) {
            clock.textContent = realMin;
        } else {
            clock.textContent = '0' + realMin;
        }
        
    };
    
    digitPSTHEl.textContent = realHour;

    if (realHour <= 19) {
        digitUTCHEl.textContent = realHour + 5;
    } else {
        digitUTCHEl.textContent = realHour - 24 + 5;
    }

}

function updateAnalogClock() {
    let secDegree = realSec * 6;
    analogSecEl.style.transform = "rotate(" + secDegree + "deg)";
    let minDegree = realMin * 6 + realSec * 0.1;
    analogMinEl.style.transform = "rotate(" + minDegree + "deg)";
    let hourDegree;
    if (realHour > 12) {
        hourDegree = (realHour - 12 + realMin/60) * 30;
    } else {
        hourDegree = (realHour + realMin/60) * 30;
    }
    analogHourEl.style.transform = "rotate(" + hourDegree + "deg)";

}