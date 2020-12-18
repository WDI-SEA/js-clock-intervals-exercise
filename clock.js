// Helper function that rotates the second hand
// Keep count of how many seconds there are. Reset once it hits 60 seconds,
// hold seconds, minutes, hours
let secs = 0;
let minutes = 0;
let hours = 0;

function tickSecondHand(seconds) {
    let secondDegreeRotation = 360/60 * seconds; // 360 degrees in a circle, 60 seconds in a rotation.
    second.style.transform = 'rotate(' + secondDegreeRotation + 'deg)'; // CSS is written as transform: rotate(ndeg): https://usefulangle.com/post/300/javascript-image-rotate
}

function tickMinuteHand(seconds) {
    let minutes = seconds/60; // 60 seconds in a minute.
    let minuteDegreeRotation = 360 / 60 * minutes; // 360 degrees in a circle, 60 minutes in a rotation.
    minute.style.transform = 'rotate(' + minuteDegreeRotation + 'deg)';
}

function tickHourHand(seconds) {
    let hours = seconds/3600; // 3600 seconds in an hour.
    let hourDegreeRotation = 360 / 12 * hours; // 360 degrees in a circle, 12 hours in a rotation.
    hour.style.transform = 'rotate(' + hourDegreeRotation + 'deg)';
}

function tick() {
    secs += 1;
    tickSecondHand(secs);
    tickMinuteHand(secs);
    tickHourHand(secs);
}

document.addEventListener('DOMContentLoaded', function() {
    const passageOfTime = setInterval(tick, 1000); // Because setInterval has parentheses, this line causes it to start counting.
})

