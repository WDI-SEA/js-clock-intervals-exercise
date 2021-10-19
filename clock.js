const clock_img = document.getElementById('clock')
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

let now = new Date();
var secondKeeper = (now.getSeconds() * 6)
var minuteKeeper = (now.getMinutes() * 6 + (now.getSeconds()*.1))
var hourKeeper = (now.getHours() * 30 + (now.getMinutes()*.5))

console.log(now)

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
    secondHand.style.transform = 'rotate('+ secondKeeper +'deg)'
    secondKeeper += 6
}
  
  

function minuteMove() {
    minuteHand.style.transform = 'rotate('+ minuteKeeper +'deg)'
    minuteKeeper += .1
}
  

function hourMove() {
    hourHand.style.transform = 'rotate('+ hourKeeper +'deg)'
    hourKeeper += .5
}
  
startClock()
const secondRun = setInterval(secondMove, 1000)
const minuteRun = setInterval(minuteMove, 1000)
const hourRun = setInterval(hourMove, 60000)