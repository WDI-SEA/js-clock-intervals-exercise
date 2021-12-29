

const secondHand = document.getElementById("second")
const minuteHand = document.getElementById('minute')
const hourHand  = document.getElementById("hour")

let secondDegree = 0
let minuteDegree = 0
let hourDegree = 0


const secondRotate = () => {
  console.log('hello seconds', secondDegree += 1/60 * 360)
  return secondHand.style.transform = `rotate(${secondDegree}deg)`
}

const minuteRotate = () => {
  minuteDegree += 6/60
  console.log('minute',minuteDegree);
  return minuteHand.style.transform = `rotate(${minuteDegree}deg)`
}

const hourRotate = () => {
  hourDegree += 1/120
  console.log('hour',hourDegree);
  return hourHand.style.transform = `rotate(${hourDegree}deg)`
}

const rotate = () => {
  secondRotate()
  minuteRotate()
  hourRotate()
}


setInterval(rotate, 1000)


