/* App State */
let secs = 0
let mins = 0
let hours = 0

/* DOM Selectors */
const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")

/* Functions */
// convert stepped increment to degrees 
const toDegrees = (increment, step) => {
  return (increment / step) * 360
}

// solve using modulo
const clockRun = () => {
  secs++
  const secDegrees = toDegrees(secs, 60)
  secondHand.style.transform = `rotate(${secDegrees}deg)`
  if((secs % 60) === 0){
    mins++
    const minDegrees = toDegrees(mins, 60)
    minuteHand.style.transform = `rotate(${minDegrees}deg)`
  }
  if((secs % 3600) === 0){
    hours++
    const hourDegrees = toDegrees(hours, 12)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }
}

// solve using Date()
const clockRunReal = () => {
  const now = new Date()

  const secDegrees = toDegrees(now.getSeconds(), 60)
  secondHand.style.transform = `rotate(${secDegrees}deg)`

  const minDegrees = toDegrees(now.getMinutes(), 60)
  minuteHand.style.transform = `rotate(${minDegrees}deg)`

  const hourDegrees = toDegrees(now.getHours(), 12)
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  
}

//const seconds = setInterval(clockRun, 10)
const seconds = setInterval(clockRunReal, 1)
