// let seconds = 1
// let minute = 0
// let hour = 0
let degreeSecond = 6
let degreeMinute = 6
let degreeHour = 30

// const secondHand = (seconds) => {
//     // 360 degrees in our clock
//     // 60 second in a minute
//     // 6 degrees per second
//     let degRotation = 6 * seconds
//     return degRotation
// }
const secondHand = () => {
    let second = document.getElementById('second')
    second.style.transform = 'rotate('+ degreeSecond + "deg)"
    degreeSecond += 6
}
setInterval(secondHand, 1000)

const minuteHand = () => {
    //360 degrees in our clock
    // 60 second in a minute
    let minute = document.getElementById('minute')
    minute.style.transform = 'rotate('+ degreeMinute + "deg)"
    degreeMinute += 6
}
setInterval(minuteHand, 60000)

const hourHand = () => {
    //360 degrees in our clock
    // 60 minutes in a hour
    let hour = document.getElementById('hour')
    hour.style.transform = 'rotate('+ degreeHour + "deg)"
    degreeHour += 30
}
setInterval(hourHand, 3600000)

// const tick = () => {
//     seconds++
// }


document.addEventListener('DOMContentLoaded', function (){
    const second = document.getElementById('second')
    const hour = document.getElementById('hour')
    const minute = document.getElementById('minute')

}) 

