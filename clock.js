
let secondDegrees = 0
let minuteDegrees = 0
let hourDegrees = 0

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hourHand')
const clockFace = document.querySelector('#face')
const nowButton = document.querySelector('#current-time')
const beginningButton = document.querySelector('#regular-clock')
const stopButton = document.querySelector('#stop-clock')
const currentButton = document.querySelector('#current-time')
// secondHandCounter = 0
// minuteHandCounter = 0
// hourHandCounter = 0

// let now = new Date();
// let currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// nowSDegree = (now.getSeconds() / 60 * 360) % 360
// nowMDegree = (now.getMinutes() / 60 * 360) % 360
// nowHDegree = (now.getHours() / 12 * 360) % 360

// Initiaizing a 00:00:00 clock
let initializeTime = new Date(2021, 9, 18, 0,0,0);
let hours = initializeTime.getHours();
let minutes = initializeTime.getMinutes();
let seconds = initializeTime.getSeconds();

// Initializing a now. clock
let now = new Date()
let nowSecond = now.getSeconds()
let nowMinute = now.getMinutes()
let nowHour = now.getHours()

// Defining Angle Relationship to Time
let secondAngle = 0
let minuteAngle = 0
let hourAngle = 0 // However this must be set over the period of a time of 60 minutes, so this would mean that it must move 6 degrees every 12 minutes

// Naive Counter 
let hourCounter = 0
let minuteCounter = 0
let secondCounter = 0

console.log(`heloo $(hourCounter)`)



// console.log(hours + minutes + seconds)
const zeroTime = () => {
    
    // determine Hours
    let hourInterval = setInterval(() => {
            hourCounter++;
            console.log(hourCounter);
            hours = (hourCounter + hours) % 12;
            hourAngle = hourAngle + 6 % 360; 
            hourHand.style.transform = "rotate(" + hourAngle + "deg)";
        }, 3600000/12) // Every 12 minutes this interval will run
    // determine Minutes
    let minuteInterval = setInterval(() => {
            minuteCounter++;
            console.log(minuteCounter)
            minutes = (minuteCounter + minutes) % 60;
            console.log(minutes)
            minuteAngle = minuteAngle + 6 % 360;
            minuteHand.style.transform ="rotate(" + minuteAngle + "deg)";
        }, 60000)


        // seconds = zero.seconds?
        // seconds = now.seconds?
        // let secondCounter = seconds

    let secondInterval = setInterval(() => {
            secondCounter++;
            console.log(secondCounter)
            seconds = (secondCounter + seconds) % 60;
            secondAngle = secondAngle + 6 % 360
            secondHand.style.transform = "rotate(" + secondAngle + "deg)";
        }, 1000)
    
    const stopClock = () => {
        clearInterval(hourInterval)
        clearInterval(secondInterval)
        clearInterval(minuteInterval)
        console.log(hourCounter + minuteCounter + secondCounter)
    }
    
        stopButton.addEventListener('click', stopClock)
    // determine Seconds
}

const nowTime = () => {
    // Polling now method every second
    let updater = setInterval(() => {
        now = new Date()
        nowSecond = now.getSeconds()
        nowMinute = now.getMinutes()
        nowHour = now.getHours()
        // console.log(`Hour: ${nowHour} Minute ${nowMinute} Second ${nowSecond}`)

        }, 1000)
    
    // determine Hours
    // every 12 minutes, update hourAngle
    let hourInterval = setInterval(() => {
            // let currentHour = nowHour % 12
            if (nowHour == 0) {
                nowHour = 12;
                console.log(nowHour) 
                let hourCounterToAngle = ((nowHour))/12 * 360 // 330
                console.log(hourCounterToAngle)
                let hourAngle = (hourCounterToAngle + .1)  * 360
                // nowHour++
                console.log(hourAngle)
                hourHand.style.transform = "rotate("+hourAngle+"deg)"
            } else if (nowHour <= 12) {
                console.log(nowHour)
                let hourCounterToAngle = ((nowHour) % 12)/12 * 360 // 330
                console.log(hourCounterToAngle)
                let hourAngle = (hourCounterToAngle+ .1)  * 360

                // nowHour++
                console.log(hourAngle)
                hourHand.style.transform = "rotate("+hourAngle+"deg)"
            }







        }, 1000)
    // determine Minutes
    let minuteInterval = setInterval(() => {
            console.log(nowMinute)
            let minuteCountertoAngle = (nowMinute/60) * 360
            let minuteAngle = minuteCountertoAngle + 6 % 360;
            minuteHand.style.transform ="rotate(" + minuteAngle + "deg)";
        }, 1000)

    let secondInterval = setInterval(() => {
            console.log(nowSecond)
            let secondCountertoAngle = (nowSecond/60) * 360
            let secondAngle = (secondCountertoAngle + 6) % 360
            secondHand.style.transform = "rotate(" + secondAngle + "deg)";
        }, 1000)
    
    const stopClock = () => {
        clearInterval(hourInterval)
        clearInterval(secondInterval)
        clearInterval(minuteInterval)
        console.log(hourCounter + minuteCounter + secondCounter)
    }
    
        stopButton.addEventListener('click', stopClock)
    // determine Seconds
}


document.addEventListener('DOMContentLoaded', () => {

// If internals are in the global scope
// then you can refer to them inside this handler
beginningButton.addEventListener('click', function() {
    // start them for the first time or... again
    zeroTime();
    
})


currentButton.addEventListener('click', function() {
    nowTime()
})


})
