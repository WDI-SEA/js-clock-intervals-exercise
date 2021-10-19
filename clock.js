const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector ("#minute");
const secondHand = document.querySelector ("#second");

function runClock() {
    let currentTime = new Date()
    // console.log(date);
    let hr = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()

    let hrRotation = (hr * 360 / 12) + (min * (360 / 60) / 12 );
    let minRotation = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secRotation = sec * 360 / 60;

    hourHand.style.transform = 'rotate(' + hrRotation + 'deg)'
    minuteHand.style.transform = 'rotate(' + minRotation + 'deg)'
    secondHand.style.transform = 'rotate(' + secRotation + 'deg)'
}

setInterval(runClock)

// function secondRotation (seconds) {
//     //amount of ticks
//     let rotation = seconds * 6
//     return rotation
// }

//console.log(secondRotation (12))

// define a function that will convert seconds to degrees
// const convertToSeconds = () => {
//     let seconds = 0
//     for (i = 0; i < 60; i++) {
//         seconds = (i/60) * 360
//         console.log(seconds)
//     }

// setInterval(convertToSeconds, 1000)

// define a function that will convert minutes to degrees
// const converToMinute = () => {
//     let minutes = 0
//     for (i = 0; i < 60; i++) {
//         minutes = (i/60) * 360
//         console.log(minutes)
//     }
// }

// define a function that will convert hours to degrees
// const converToHour = () => {
//     let hours = 0
//     for (i = 0; i < 60; i++) {
//         hours = (i/60) * 360
//         console.log(hours)
//     }
// }
