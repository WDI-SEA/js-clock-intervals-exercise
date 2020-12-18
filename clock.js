document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOm Loaded')
// make a variable for each hand
let seconds = document.getElementById('second')
let minutes = document.getElementById('minute')
let hour = document.getElementById('hour')


// make a function to rotate seconds hand
// let secondsMove = (degrees) => {
//     for(degree = 0; degree>=60; degree++) {
//         se
//     } 
// }

let degreeSec = 6

const secondRotation = () => {
    let second = document.getElementById('second')
    second.style.transform = 'rotate(' +degreeSec + 'deg)'
    degreeSec+=6
}
setInterval(secondRotation, 1000)

let degreeMin = 6

const minRotation = () => {
    let minute = document.getElementById('minute')
    minute.style.transform = 'rotate(' +degreeMin + 'deg)'
    degreeMin+=6
}
setInterval(minRotation, 60000)

let degreeHour = 30
const hourRotation = () => {
    let hour = document.getElementById('hour')
    minute.style.transform = 'rotate(' +degreeHour + 'deg)'
    degreeHour+= 30
}
setInterval(hourRotation, 3600000)


})