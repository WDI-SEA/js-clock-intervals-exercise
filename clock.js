// what html elements will be manipulated?
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

// create intervals to make the clock tick.
// second hand will run 
// will determine the new degree transformation
let sDegree = 0
const secDegrees = () => {
    console.log(sDegree)
    // sDegree += 6
    return sDegree += 6
    }

// check to make sure increments of 6
// console.log(secDegrees())
// console.log(secDegrees())
// console.log(secDegrees())

// transform the second hand 6 degrees every second
const seconds = () => {
    secondHand.style.transform = `rotate(${secDegrees()}deg)`
}

const secondTick = setInterval(seconds, 1000)