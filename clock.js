// 1.
//Put the hands together - CSS
// Order the images hours/minutes/seconds (top) -CSS(z-index)/HTML 
// ------------------------------ DONE

// 2.
// Write a function that calculates the degrees of rotation for each hand (time intervals)
// AND Use DOM style in JS to rotate hands


//Grab the elements
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
//initialize variables
// console.log('currentTime Object')
// console.dir(currentTime)
// let seconds = currentTime.getSeconds() * 6
// let minutes = currentTime.getMinutes() * 6
// let hours = currentTime.getHours()
// let angle = 0
// one function for initial position - DONE

// running setInterval
function clockWorker(){
    //calculate rotation angles & intervals
    // apply rotation styles
    let currentTime = new Date()
    let secondAngle = currentTime.getSeconds() * 6
    let minuteAngle = currentTime.getMinutes() * 6
    let hourAngle = currentTime.getHours() * 30
    
    secondHand.style.transform = `rotate(${secondAngle}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`
    hourHand.style.transform = `rotate(${hourAngle}deg)`    
}
setInterval(() => {
    clockWorker()
}, 1000)