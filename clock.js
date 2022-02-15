const hourHand = document.querySelector('#hour')
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')

// hours; rotate 30 degrees every 3,600,000 milliseconds
let hourCount = 1
const hourRotation = setInterval(() => {
    const degrees = (hourCount / 12) * 360
    hourHand.style.transform = "rotate(" + degrees + "deg)"
    hourCount++
}, 3600000)

// minutes; rotate 6 degrees every 60,000 milliseconds
let minuteCount = 1
const minuteRotation = setInterval(() => {
    const degrees = (minuteCount / 60) * 360
    minuteHand.style.transform = "rotate(" + degrees + "deg)"
    minuteCount++
}, 60000)



// seconds; rotate 1 degree every 1,000 milliseconds
let secondCount = 1
const secondRotation = setInterval(() => {
    const degrees = (secondCount / 60) * 360
    secondHand.style.transform = "rotate(" + degrees + "deg)"
    secondCount++
}, 1000)

