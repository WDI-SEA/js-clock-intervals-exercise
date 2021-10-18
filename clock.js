const secondHand = document.getElementById("#second")
const minuteHand = document.getElementById("#minute")
const hourHand = document.getElementById("#hour")

const convertSecondRotation = () => {
    setInterval(moveSecondHand, 1000)
    let seconds = 0 
    for (i = 0; i < 60; i++){
        seconds = (i/60) * 360
    }
    console.log(seconds)
}
const convertMinuteRotation = () => {
    setInterval(moveMinuteHand, 60000)
    let minutes = 0 
    for (i = 0; i < 60; i++) {
        minutes = (i/60) * 360
    }
    console.log(minutes)
}
const convertHourRotation = () => {
    setInterval(moveHourHand, 3600000)
    let hours = 0 
    for (i = 0; i < 12; i++){
        hours =    (i/12) * 360
    }
    console.log(hours)
}

const moveSecondHand = () => {
    convertSecondRotation()
    secondHand.style.transform = "rotate(" + seconds + "deg)"
}
const moveMinuteHand = () => {
    convertMinuteRotation()
    minuteHand.style.transform = "rotate(" + minutes + "deg)"
}
const moveHourHand = () => {
    convertHourRotation()
    hourHand.style.transform = "rotate(" + hours + "deg)"
}