const clock_img = document.getElementById('clock')
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')
var secondKeeper = 6
var minuteKeeper = 6
var hourKeeper = 24

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
    hourHand.style.transform = 'rotate('+ minuteKeeper +'deg)'
    hourKeeper += 24
}
  
const secondRun = setInterval(secondMove, 1000)
const minuteRun = setInterval(minuteMove, 60000)
const hourRun = setInterval(hourMove, 3600000)