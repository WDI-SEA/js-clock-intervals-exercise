// let seconds = 1
// let minute = 0
// let hour = 0
 let degreeSecond = 6


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

const minuteHand = (minute) => {
    //360 degrees in our clock
    // 60 second in a minute
    let degRotation = 60 * minute
}

const hourHand = (hour) => {
    //360 degrees in our clock
    // 60 minutes in a hour
    let degRotation = 60 * hour
}

const tick = () => {
    seconds++
}


document.addEventListener('DOMContentLoaded', function (){
    const second = document.getElementById('second')
    const hour = document.getElementById('hour')
    const minute = document.getElementById('minute')

}) 

