document.addEventListener('DOMContendLoaded', ()=>{
    console.log('hello')

})
let myTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
let currentTime = myTime.split(",")
console.log(currentTime);
//define variables for each hands degree per tick
var secondDegs = 6
var minuteDegs = 6
var hourDegs = 30

// set second hand ticks

const secondsTick = () => {
    let seconds = document.getElementById('second');
    seconds.style.transform = "rotate(" + secondDegs + "deg)";
    secondDegs += 6;
}

setInterval(secondsTick, 1000);

const minutesTick = () => {
    let minutes = document.getElementById('minute');
    minutes.style.transform = "rotate(" + minuteDegs + "deg)";
    minuteDegs +=6
}
setInterval(minutesTick, 60000);

const hoursTick = () => {
    let hours = document.getElementById('hour');
    hours.style.transform = "rotate(" + hourDegs + "deg)";
    hourDegs += 30;
}

setInterval(hoursTick, 3600000);