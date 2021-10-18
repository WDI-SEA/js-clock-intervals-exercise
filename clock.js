//set interval for hour
//set interval for minute
//set interval for second

//move hands
//select hour hand
const hourHand = document.getElementById('hour')
//adjust CSS
//select minute hand
const minuteHand = document.getElementById('minute')
//adjust CSS
//select second hand
const secondHand = document.getElementById('second')
//adjust CSS
//do math for interval to degree
const secondConversion = (s) => {
    return (s/60) * 360
}
let secondPosition = 0
let minutePosition = 0

const moveSecondHand = () => { 
    secondHand.style.transform = "rotate("+secondPosition+"deg)"
    secondPosition += 6
}

const moveMinuteHand = () => {
    minuteHand.style.transform = "rotate("+minutePosition+"deg)"
    minutePosition += 3
}

const secondTick = setInterval(moveSecondHand, 1000)
const minuteTick = setInterval(moveMinuteHand, 30000)