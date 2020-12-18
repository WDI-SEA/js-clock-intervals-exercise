let secondHand = document.getElementById("second")
let secondDegree = 0
const turnSecond = () => {
    // console.log(secondHand)
    secondDegree = secondDegree + 6
    secondHand.style.transform = "rotate(" + secondDegree + "deg)";
}
setInterval(turnSecond, 1000)


let minuteHand = document.getElementById("minute")
let minuteDegree = 0
const turnMinute = () => {
    console.log(minuteHand)
    minuteDegree = minuteDegree + 6 
    minuteHand.style.transform = "rotate(" + minuteDegree + "deg)";
}
setInterval(turnMinute, 60000)


let hourHand = document.getElementById("hour")
let hourDegree = 0
const turnHour = () => {
    console.log(hourHand)
    hourDegree = hourDegree + 30
    hourHand.style.transform = "rotate(" + hourDegree + "deg)";
}
setInterval(turnHour, 3600000)