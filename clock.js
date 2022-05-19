
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

    const secondsRotation= () => {let secondcounters = setInterval(() => {
        let degrees = (seconds / 60) * 360;
        secondHand.style.transform = "rotate(" + degrees + "deg)"
        seconds++;
    }, 1000);
    }

    const minutesRotation= () => {let secondcounters = setInterval(() => {
    let degrees = (seconds / 60) * 360;
    secondHand.style.transform = "rotate(" + degrees + "deg)"
    seconds++;
}, 60000);
}

const hourRotation= () => {let secondcounters = setInterval(() => {
    let degrees = (seconds / 60) * 360;
    secondHand.style.transform = "rotate(" + degrees + "deg)"
    seconds++;
}, 1000);
}

secondsRotation();
minutesRotation();
hourRotation();
}

runClock();