
//DOM Initializations
let secondHand = document.getElementById('second');
let minuteHand = document.getElementById('minute');
let hourHand = document.getElementById('hour');



/////how do we know what second it is?
///// return 0-59 at a set interval of 1000
//secondClock = (counter, 1000)

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

//calculate the degrees to be rotated for each time and move hand 
const moveSecondHand = (time) => {
    let degrees 
    if (time === 0) {
        degrees = 0
        secondHand.style.transform = "rotate(" + degrees + "deg)"
    }
    else  {
        degrees = (time/60) * 360
        secondHand.style.transform = "rotate(" + degrees + "deg)"
    }

}


//write a function that catches the seconds and rotates the hand accordingly 
const secondConverter = () => {
    moveSecondHand(seconds())
}


//write a function that runs the needed functions every second
const secondSetter = ( (fireOnSecond) => {
    setInterval(fireOnSecond, 2000)
    console.log("seconds set!")
})

//invoke the cb and HOF to move he second hand


/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////do the same for minutes////

//write a function that increments the seconds
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

//calculate the degrees to be rotated for each time and move hand 
const moveMinuteHand = (time) => {
    let degrees 
    if (time === 0) {
        degrees = 0
        minuteHand.style.transform = `rotate(${degrees}deg)`
    }
    else  {
        degrees = (time/60) * 360
        minuteHand.style.transform = `rotate(${degrees}deg)`
    }

}


//write a function that catches the seconds and rotates the hand accordingly 
const minuteConverter = () => {
    moveMinuteHand(minutes())
}


//write a function that runs the needed functions every second
const minuteSetter = ( (fireOnMinute) => {
    setInterval(fireOnMinute, 120000)
    console.log("minutes set!")
})

//invoke the cb and HOF to move he second hand



//////////////////////////////////////////////////////////
///////////////////////////////////////////////////
////do the same for hours////

//write a function that increments the hours
let hourCount = 0
 const hours = () => {
        if (hourCount === 11) {
            console.log(`hourCount = ${hourCount}`)
            hourCount = 0
            return hourCount
        } else {
            console.log(`hourCount = ${hourCount}`)
            hourCount++
            return hourCount
    }    
 }

//calculate the degrees to be rotated for each time and move hand 
const moveHourHand = (time) => {
    let degrees 
    if (time === 0) {
        degrees = 0
        hourHand.style.transform = `rotate(${degrees}deg)`
    }
    else  {
        degrees = (time / 12) * 100
        hourHand.style.transform = `rotate(${degrees}deg)`
    }

}


//write a function that catches the seconds and rotates the hand accordingly 
const hourConverter = () => {
    moveHourHand(hours())
}


//write a function that runs the needed functions every second
const hourSetter = ( (fireOnHour) => {
    setInterval(fireOnHour, 7200000)
    console.log("hours set!")
})


//minuteClock = (someFun, 60000)
    //minutes?
    // return 0-59 at a set interval of 60000

//hourClock = (counter, 360000)
    //hours? 
    //return 0-11 at a set interval of 3600000


////////Be sure to invoke the functions all at once so 
////////the timers begin at the same time!

document.addEventListener('DOMContentLoaded', () => {
    secondSetter(seconds)
    secondSetter(secondConverter)
 })
document.addEventListener('DOMContentLoaded', () => { 
    minuteSetter(minutes)
    minuteSetter(minuteConverter)
})
document.addEventListener('DOMContentLoaded', () => {
    hourSetter(hours)
    hourSetter(hourConverter)
 })







