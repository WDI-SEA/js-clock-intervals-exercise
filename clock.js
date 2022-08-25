// APP STATE -- values that change through the lifetime of the program (our variable)

let seconds = 0 // 
let minutes = 0 // 
let hours = 0 // 2

// DOM selectors
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

// console.log(secondHand, minuteHand, hourHand)

// Functions

function secondRotation(secs) {
    return (secs / 60) * 360
}

function minuteRotation(mins) {
    return (mins / 60) * 360
}

function hourRotation(hrs) {
    return (hrs / 12) * 360
}

function clock() {
    // increment the seconds value by one
    seconds++
    // if seconds if greater than or equal to 60
    if (seconds >= 60) {
        // set seconds to be 0
        seconds = 0
        // increment minutes by one
        minutes++
    }
    
    // if minutes is greater than or equal to 60
    if (minutes >= 60) {
        // set minutes to be 0
        minutes = 0
        // increment hours
        hours++
    }
    
    // if hours is gte 12 
    if (hours >= 12) {
        // reset hours to be 0
        hours = 0
    }

    // console.log(seconds, minutes, hours)
    // use our rotation helper functions to target the transform of the seconds mins and hours hands on the the clock
    secondHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)'
    minuteHand.style.transform = 'rotate(' + minuteRotation(minutes) + 'deg)'
    hourHand.style.transform = 'rotate(' + hourRotation(hours) + 'deg)'
}

// function realHour() {
//     const actualTime = new Date()
//     let hourDegrees = actualTime.getHours()
//     let hours = 1
//     hours = hourDegrees * 30
//     hourHand.style.transform = 'rotate(' + hours + 'deg)'
// } 

// function realMin() {
//     const actualTime = new Date()
//     let minuteDegrees = actualTime.getMinutes()
//     let mins = 1
//     mins = minuteDegrees * 6
//     minuteHand.style.transform = 'rotate(' + mins + 'deg)'
// }

// function realSec() {
//     const actualTime = new Date()
//     let secondDegrees = actualTime.getSeconds()
//     let secs = 1
//     secs = secondDegrees * 6
//     secondHand.style.transform = 'rotate(' + secs + 'deg)'
// }

setInterval(clock, 1000)

// setInterval(realHour, 1)
// setInterval(realMin, 1)
// setInterval(realSec, 1)
