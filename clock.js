


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

// nowButton.addEventListener('click', nowTime)
beginningButton.addEventListener('click', zeroTime)





// // regular = new Date(0, 0, 0);
// // function regularTime(regular.GetHour, regualr.GetMin, regular.GetSec) { ... }
// //
// // now = new Date()
// // function nowTime(now.GetHour, now.GetMin, now.GetSec) { ... }

// /*

// function secFrameRate = setInterval(() => {
//     secondDegrees = secondDegrees + secDegreePerSecond
//     secondHand.style.transform = rotate(secondedegres)
// }

// function minFrameRate = setInterval() = {
//     secondDegrees = secondDegrees + secDegreePerSecond
//     minutesHand.style.transform = rotate(secondedegres)
// }

// function hoursFrameRate = setInterval() = {
//     secondDegrees = secondDegrees + secDegreePerSecond
//     hoursHand.style.transform = rotate(secondedegres)
// }
    
// */
// const regularTime = () => {

// /*
//     setInterval(() => {

//     }
// */

//     setInterval(()=> {
//         secondDegrees = secondDegrees+6;
//         secondHandCounter++;
//         secondHandCounter = secondHandCounter % 60
//         console.log(secondHandCounter)
//         secondHand.style.transform = "rotate(" + secondDegrees+ "deg)";
    

//     }, 1000)

//     setInterval(() => {
//         minuteDegrees = minuteDegrees+6;
//         minuteHandCounter++;
//         minuteHandCounter = minuteHandCounter % 60
//         console.log(minuteHandCounter)
//         minuteHand.style.transform = "rotate(" + minuteDegrees+ "deg)";
//     }, 60000)

//     setInterval(() => {
//         setInterval(()=> {
//         hourDegrees = hourDegrees+6
//         },12000)
//         hourHandCounter++;
//         hourHandCounter = hourHandCounter % 12
//         console.log(hourHandCounter)
//         hourHand.style.transform = "rotate(" + minuteDegrees+ "deg)";
//     }, 3600000)
// }


// const nowTime = () => {

//     setInterval(()=> { // Minute Hand
//         secondHandCounter++;
//         nowSDegree = nowSDegree+6;
//         secondHandCounter = secondHandCounter % 60
//         console.log(secondHandCounter)
//         secondHand.style.transform = "rotate(" + nowSDegree+ "deg)";
//      }, 1000)
    
//     setInterval(() => {
//         nowMDegree = nowMDegree+6;
//         minuteHandCounter++;
//         minuteHandCounter = minuteHandCounter % 60
//         console.log(minuteHandCounter)
//         minuteHand.style.transform = "rotate(" + nowMDegree + "deg)";
//     }, 60000)
    
//     setInterval(() => {
//         setInterval(()=> {
//         nowHDegree= nowHDegree+6
//         },12000)
//         hourHandCounter = hourHandCounter % 12
//         hourHandCounter++;
//         console.log(hourHandCounter)
//         hourHand.style.transform = "rotate(" + nowHDegree + "deg)";
//     }, 3600000)


// }

// nowButton.addEventListener('click', nowTime)
beginningButton.addEventListener('click', zeroTime)