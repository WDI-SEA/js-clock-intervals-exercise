// DOM elements
let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')

// incrementers for seconds, minutes and hours
let s = 0
let m = 0
let h = 0

// formulas to convert seconds minutes and hours into degrees of rotation
const secondRotation = (seconds) => {
    return (seconds / 60) * 360
}
const minuteRotation = (minutes) => {
    return (minutes / 60) * 360
}
const hourRotation = (hours) => {
    return (hours / 12) * 360
}

// functions to be called in setIntervals; console log shows each refresh of the image
const incrementSecond = () => {
    s += .1
    secondHand.style.transform = `rotate(${secondRotation(s)}deg)`
    console.log('second incrementer')
}

const incrementMinute = () => {
    m += .01
    minuteHand.style.transform = `rotate(${minuteRotation(m)}deg)`
    console.log('minute incrementer')
}

const incrementHour = () => {
    h += .001
    hourHand.style.transform = `rotate(${hourRotation(h)}deg)`
    console.log('hour incrementer')
}

// refreshed 10 times per second
setInterval(incrementSecond, 100)
// refreshes 100 times per minute
setInterval(incrementMinute, 600)
// refreshes 1000 times per hour
setInterval(incrementHour, 3600)