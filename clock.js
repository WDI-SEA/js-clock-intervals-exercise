
// for second hand
const secondHand = document.getElementById('second');
//for minute hand
const minuteHand = document.getElementById('minute');
//for hour hand
const hourHand = document.getElementById('hour');



const runClock = () => {
    console.log();
    const date = new Date()
    console.log(date)
    
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours   = date.getHours();

    let secondsHandRotation = seconds / 60;
    let minutesHandRotation = minutes / 60;
    let hourHandRotation = (minutesHandRotation + hours) / 12;

    secondHand.style.transform = "rotate(" + secondsHandRotation * 360 + "deg)"
    minuteHand.style.transform = "rotate(" + minutesHandRotation * 360 + "deg)"
    hourHand.style.transform = "rotate(" + hourHandRotation * 360 + "deg)"
}
setInterval(runClock, 1000);