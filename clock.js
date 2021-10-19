let secondDegrees = 45;
let minuteDegrees = 75;
let hourDegrees = 180;

let secondHand = document.getElementById('second');
secondHand.style.transform = `rotate(${secondDegrees}deg)`

let minuteHand = document.getElementById('minute');
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

let hourHand = document.getElementById('hour');
hourHand.style.transform = `rotate(${hourDegrees}deg)`