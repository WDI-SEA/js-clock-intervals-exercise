const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')
const hourHand = document.getElementById('hour')

const secondRotation = (second) => {
    return (second / 60) * 360
}

const minuteRotation = (minute) => {
    return (minute / 60) * 360
}

const hourRotation = (hour) => {
    return (hour / 12) * 360
}

const getCurrentTime = () => {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const initialSecRotate = secondRotation(seconds)
    secondHand.style.transform = `rotate(${initialSecRotate}deg)`
    const initialMinRotate = minuteRotation(minutes)
    minuteHand.style.transform = `rotate(${initialMinRotate}deg)`
    const initialHourRotate = hourRotation(hours)
    hourHand.style.transform = `rotate(${initialHourRotate}deg)`
    return [seconds, minutes, hours]
}

const rotateSecondHand = () => {
    let seconds = getCurrentTime()[0]
    let degrees = secondRotation(seconds)
    secondHand.style.transform = `rotate(${degrees}deg)`
}

const rotateMinuteHand = () => {
    let minutes = getCurrentTime()[1]
    let degrees = minuteRotation(minutes)
    minuteHand.style.transform = `rotate(${degrees}deg)`
}

const rotateHourHand = () => {
    let hours = getCurrentTime()[2]
    let degrees = minuteRotation(hours)
    hourHand.style.transform = `rotate(${degrees}deg)`
}

const seconds = setInterval(rotateSecondHand, 1000)

const minutes = setInterval(rotateMinuteHand, 60000)

const hours = setInterval(rotateHourHand, 3.6e+6)

// document.addEventListener('DOMContentLoaded', getCurrentTime)


