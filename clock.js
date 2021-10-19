const clock_img = document.getElementById('clock')
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

let now = new Date();
var secondKeeper = (now.getSeconds() * 6)
var minuteKeeper = (now.getMinutes() * 6)
var hourKeeper = (now.getHours() * 24)

console.log(secondKeeper, minuteKeeper, hourKeeper)

// secondHand.style.transform = 'rotate('+ secondKeeper +'deg)'
minuteHand.style.transform = 'rotate(0deg)'
hourHand.style.transform = 'rotate(0deg)'
secondHand.style.transform = 'rotate(0deg)'

function startClock () {
    secondHand.style.transform = 'rotate('+ secondKeeper +'deg)'
    minuteHand.style.transform = 'rotate('+ minuteKeeper +'deg)'
    hourHand.style.transform = 'rotate('+ hourKeeper +'deg)'
}


// second move function
function secondMove() {
    console.log("Second has passed")
    secondHand.style.transform = 'rotate('+ secondKeeper +'deg)'
    secondKeeper += 6
}
  
  

function minuteMove() {
    console.log("Minute has passed")
    minuteHand.style.transform = 'rotate('+ minuteKeeper +'deg)'
    minuteKeeper += 6
}
  

function hourMove() {
    console.log("Hour has passed?")
    console.log("Minute has passed")
    hourHand.style.transform = 'rotate('+ hourKeeper +'deg)'
    hourKeeper += 24
}
  
startClock()
const secondRun = setInterval(secondMove, 1000)
const minuteRun = setInterval(minuteMove, 60000)
const hourRun = setInterval(hourMove, 3600000)