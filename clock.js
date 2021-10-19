//DECLARE VARIABLES

let hourDegree = 0
let minuteDegree = 0
let secondDegree = 0

//DECLARE BASIC FUNCTIONS

//time to degree conversion for seconds
const secondRotation = (second) => {
    let secondDegree = (second/60) * 360
    console.log(secondDegree)
}
//time to degree conversion for minutes
//angle movement = same as seconds. interval time will differ
const minuteRotation = (minute) => {
    let minuteDegree = (minute/60) * 360
    console.log(minuteDegree)
}
//time to degree converion for hours
const hourRotation = (hour) => {
    let hourDegree = (hour/12) * 360
    console.log(hourDegree)
}
//DECLARE HIGHER ORDER FUNCTION

//pass secondRotation, minuteRotation, and hourRotation functions
const hourToDegree = (hour, minute, second) => {
    hourRotation(hour)
    minuteRotation(minute)
    secondRotation(second)
}

//TEST
hourToDegree(3, 4, 6)

