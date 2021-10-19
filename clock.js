///rotation variables
let secondDegrees = 45;
let minuteDegrees = 75;
let hourDegrees = 180;

//DOM Initializations
let secondHand = document.getElementById('second');
secondHand.style.transform = `rotate(${secondDegrees}deg)`

let minuteHand = document.getElementById('minute');
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

let hourHand = document.getElementById('hour');
hourHand.style.transform = `rotate(${hourDegrees}deg)`

//calculate the degrees to be rotated for each time
const secMinRotation = (time) => {
    if (time === 0) {
        return 0
    }
    else  {
        return (time/60) * 360
    }
}
console.log(`secMinRotation(59) = ${secMinRotation(59)}`)

console.log(`secMinRotation(0) = ${secMinRotation(0)}`)

const hourRotation = (time) => {
    if (time === 0) {
        return 0
    } else {
        return (time / 12) * 100
    }
}
console.log(`hourRotation(5) = ${hourRotation(5)}`)
console.log(`hourRotation(0) = ${hourRotation(0)}`)

/////how do we know what second it is?
///// return 0-59 at a set interval of 1000
//secondClock = (someFunc, 1000)

//write a function that increments the seconds
let secondCount = 0
 const seconds = () => {
        if (secondCount === 59) {
            console.log(`secondCount = ${secondCount}`)
            secondCount = 0
            return secondCount
        } else {
            console.log(`secondCount = ${secondCount}`)
            secondCount++
            return secondCount
        }
    }    

//write a function that runs the needed functions every second
const secondSetter = ( (someFunc) => {
    setInterval(someFunc, 1000)
})

//invoke the cb and HOF to set the second hand
secondSetter(seconds)

/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////do the same for minutes////

///second incrementer
let minuteCount = 0
 const minutes = () => {
        if (minuteCount === 59) {
            console.log(`minuteCount = ${minuteCount}`)
            minuteCount = 0
            return minuteCount
        } else {
            console.log(`minuteCount = ${minuteCount}`)
            minuteCount++
            return minuteCount
        }
    }    

//function to run the functions every minute
const minuteSetter = ( (someFunc) => {
    setInterval(someFunc, 60000)
})

//invoke said minute functions
minuteSetter(minutes)
 
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////
////do the same for hours////


//minuteClock = (someFun, 60000)
    //minutes?
    // return 0-59 at a set interval of 60000

//hourClock = (someFunc, 360000)
    //hours? 
    //return 0-11 at a set interval of 3600000


