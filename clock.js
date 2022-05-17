
// for second hand
const secondHand = document.getElementById('second');
//for minute hand
const minuteHand = document.getElementById('minute');
//for hour hand
const hourHand = document.getElementById('hour');

//moving the clock
let seconds = 0;
let minutes = 0;
let hours = 0;

const runClock = () => {
    console.log();

    const secondsRotation = setInterval(() => {
        let degrees = (seconds / 60) * 360;
        second.style.transform = "rotate(" + degrees + "deg)"
        seconds++;
    }, 1000);
}