var secondHand = document.querySelector('#second');
var minuteHand = document.querySelector('#minute');
var hourHand = document.querySelector('#hour');
const degrees = 360;
const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerClock = 12;
const quarterHoursPerClock = 12*4;
var now = new Date();
var rotationSec = degrees/secondsPerMinute;
var rotationMin = degrees/minutesPerHour;
var rotationHour = degrees/hoursPerClock;
var rotationQuarterHour = degrees/quarterHoursPerClock;

var nowSec = now.getSeconds();
    console.log('current sec ', nowSec);

var nowMin = now.getMinutes() + (nowSec / secondsPerMinute);
    console.log('current min ', nowMin);

var nowQuarterHour = ( now.getHours() / 4 ) + ((nowMin / minutesPerHour) / 4);
    console.log('current hour ', nowHour);

var nowHour = now.getHours() + (nowMin / minutesPerHour);
    console.log('current hour ', nowHour);

secondHand.style.transform = 'rotate('+rotationSec*nowSec+'deg)';
minuteHand.style.transform = 'rotate('+rotationMin*nowMin+'deg)';
hourHand.style.transform = 'rotate('+rotationHour*nowHour+'deg)';

function secondRotate() {
    
    secondHand.style.transform = 'rotate('+rotationSec*nowSec+'deg)';
    console.log("seconds" + rotationSec);
    nowSec++;
}

function minuteRotate() {
    
    minuteHand.style.transform = 'rotate('+rotationMin*nowMin+'deg)';
    console.log("minutes " + rotationMin);
    nowMin++;
}

// function quarterHourRotate() {
    
//     hourHand.style.transform = 'rotate('+rotationQuarterHour*nowQuarterHour+'deg)';
//     console.log("quarterHours " + rotationQuarterHour);
//     nowHour++;
// }

function hourRotate() {
    
    hourHand.style.transform = 'rotate('+rotationHour*nowHour+'deg)';
    console.log("hours " + rotationHour);
    nowHour++;
}

setInterval(secondRotate, 1000);
setInterval(minuteRotate, 60000);
// setInterval(quarterHourRotate, 15000);
setInterval(hourRotate, 720000);

