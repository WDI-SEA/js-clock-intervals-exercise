let secondDegrees = 6;
let minuteDegrees = 6;
let hourDegrees = 30;

const secondHandRota = () => {
    let seconds = document.getElementById('second');
    seconds.style.transform = "rotate(" + secondDegrees + "deg)"
    secondDegrees += 6;
}
setInterval(secondHandRota, 1000);

const minuteHandRota = () => {
    let minutes = document.getElementById('minute');
    minutes.style.transform = "rotate(" + minuteDegrees + "deg)"
    minuteDegrees += 6;
}
setInterval(minuteHandRota, 60000);

const hourHandRota = () => {
    let hours = document.getElementById('hour');
    hours.style.transform = "rotate(" + hourDegrees + "deg)"
    hourDegrees += 30;
}
setInterval(hourHandRota, 3600000);