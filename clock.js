// APP STATE -- values that change throughout the lifecycle of the program
let secs = 0
let mins = 0
let hours = 0

// DOM sleectors
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')
// console.log(secondHand, minuteHand, hourHand)

const secondRotation = seconds => (seconds / 60) * 360
const minuteRotation = minute => (minute / 60) * 360
const hourRotation = hour => (hour / 12) * 360

// program functions
const clock = function() {
  secs++
  if (secs >= 60) {
    // increment mins since 60 secs has passed
    mins++
    // restart secs for a new min
    secs = 0
  }
  if (mins >= 60) {
    // an hour has passed if mins are grater than 60
    hours++
    // reset mins
    mins = 0
  }
  if (hours > 12) {
    // restart hours after 12 have passes
    hours = 0
  }


  console.log('seconds:', secs, 'mins:', mins, 'hours', hours)
  secondHand.style.transform = 'rotate(' + secondRotation(secs) + 'deg)'
  minuteHand.style.transform = 'rotate(' + minuteRotation(mins) + 'deg)'
  hourHand.style.transform = 'rotate(' + hourRotation(hours) + 'deg)'
}

// interval to start the clock
setInterval(clock, 100)