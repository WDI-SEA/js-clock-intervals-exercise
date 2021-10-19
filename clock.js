// what html elements will be manipulated?
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

// create intervals to make the clock tick.
// second hand will tick
// will determine the new degree transformation
let sDegree = 0
const secDegrees = () => {
    console.log(sDegree)
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

//minute hand with tick
// will determine the new degree transformation
let mDegree = 0
const minDegrees = () => {
    console.log(mDegree)
    return mDegree += 0.1
}

// check increments
// console.log(minDegrees())
// console.log(minDegrees())

// transform the second hand 6 degrees every second
const minutes = () => {
    minuteHand.style.transform = `rotate(${minDegrees()}deg)`
}

const minuteTick = setInterval(minutes, 1000)

let hrDegree = 0
const hrDegrees = () => {
    console.log(hrDegree)
    return hrDegree += 0.0083
}

console.log(hrDegrees())
console.log(hrDegrees())

const hours = () => {
    hourHand.style.transform = `rotate(${hrDegrees()}deg)`
}

const hourTick = setInterval(hours, 1000)