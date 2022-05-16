// Get the elements of the clock hands
let secondHand = document.getElementById('second')
let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')

// Setting the times to default and storing the local date
let secondCounter = 0
let hourCounter = 0
let minuteCounter = 0
let date = new Date()

// Set an interval
setInterval(() => {
// Let the date be at the local date
    date = new Date()
// Let the second, minute, and hour be the time of the local date
    secondCounter = date.getSeconds()
    minuteCounter = date.getMinutes()
    hourCounter = date.getHours()
// Let the second hand rotate every 360/60 degrees per second
    secondHand.style.transform = `rotate(${secondCounter * 6}deg)`
// Let the minute hand rotate every 360/60 degrees per minute
    minuteHand.style.transform = `rotate(${minuteCounter * 6}deg)`
//Let the hour hand rotate by every 360/12 degrees per hour
    hourHand.style.transform = `rotate(${hourCounter}deg)`
// Every second
}, 1000)




