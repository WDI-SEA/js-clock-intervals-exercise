//DECLARE VARIABLES
let hourDegree = 0
let minuteDegree = 0
let secondDegree = 0


//DECLARE BASIC FUNCTIONS
//time to degree conversion for seconds
const secondRotation = (second) => {
    let secondDegree = (second/60) * 360
    let el = document.getElementById("second");
    el.style.transform = "rotate(" + secondDegree + "deg)";
    //console.log(secondDegree)
}
//time to degree conversion for minutes
//angle movement = same as seconds. interval time will differ
const minuteRotation = (minute) => {
    let minuteDegree = (minute/60) * 360
    let el = document.getElementById("minute");
    el.style.transform = "rotate(" + minuteDegree + "deg)";
    //console.log(minuteDegree)
}
//time to degree converion for hours
const hourRotation = (hour) => {
    let hourDegree = (hour/12) * 360
    let el = document.getElementById("hour");
    el.style.transform = "rotate(" + hourDegree + "deg)";
    //console.log(hourDegree)
}
//use current date to update hourToDegree function's parameters
const changeTime = () => {
    let now = new Date();
    hour = now.getHours()
    minute = now.getMinutes()
    second = now.getSeconds()
    hourToDegree(hour, minute, second)
    console.log(second)
}

//DECLARE HIGHER ORDER FUNCTION
//pass hour, minute, and second parameters to secondRotation, minuteRotation, and hourRotation functions
const hourToDegree = (hour, minute, second) => {
    hourRotation(hour)
    minuteRotation(minute)
    secondRotation(second)
}


//RUN

//begin clock by running changeTime
changeTime()
//set interval for running changeTime function every second
const time = setInterval(changeTime, 1000)

//set intervals for running time-to-degree rotation functions
const secondTick = setInterval(secondRotation, 1000)
const minuteTick = setInterval(minuteRotation, 60000)
const hourTick = setInterval(hourRotation, 360000)


