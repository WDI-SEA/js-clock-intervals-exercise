const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")

let secondDegrees = 0
let minuteDegrees = 0
let hourDegrees = 0

const moveSecondHand = () => {
    secondDegrees += 6
    console.log(secondDegrees)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
}
const moveMinuteHand = () => {
    minuteDegrees += 6
    console.log(minuteDegrees)
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
}
const moveHourHand = () => {
    hourDegrees =+ 30
    console.log(hourDegrees)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(moveSecondHand, 1000)
setInterval(moveMinuteHand, 60000)
setInterval(moveHourHand, 3600000)
