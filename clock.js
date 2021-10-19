let hourDegree = 0
let minuteDegree = 0
let secondDegree = 0

const secondRotation = (second) => {
    let secondDegree = (second/60) * 360
    console.log(secondDegree)
}

const minuteRotation = (minute) => {
    let minuteDegree = (minute/60) * 360
    console.log(minuteDegree)
}

const hourRotation = (hour) => {
    let hourDegree = (hour/12) * 360
    console.log(hourDegree)
}

secondRotation(2)

// const hourToDegree = (hour, minute, second) => {
//     hourRotation(hour)
//     minuteRotation(minute)
//     secondRotation(second)
// }

//EVENT LISTENERS
// document.addEventListener("DOMContentLoaded", () => {})
