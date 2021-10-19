const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

let sec = 0
let min = 0
let hr = 0

const secondRotation = (seconds) => {
    return (seconds / 60) * 360
}
const minuteRotation = (minutes) => {
    return (minutes / 60) * 360
}
const hourRotation = (hours) => {
    return (hours / 12) * 360
}

const degreeSecond = () => {
    sec += .1
    secondHand.style.transform = `rotate(${secondRotation(sec)}deg)`
    console.log('second degree')
}

const degreeMinute = () => {
    min += .01
    minuteHand.style.transform = `rotate(${minuteRotation(min)}deg)`
    console.log('minute degree')
}

const degreeHour = () => {
    hr += .001
    hourHand.style.transform = `rotate(${hourRotation(hr)}deg)`
    console.log('hour degree')
}
setInterval(degreeSecond, 100)
setInterval(degreeMinute, 600)
setInterval(degreeHour, 3600) 