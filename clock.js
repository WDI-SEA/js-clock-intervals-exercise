// let degreesSeconds = secondRotation()
// let degreesHours = hourRotation()
// let degreesMinutes = minuteRotation()

let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')

let seconds = 0
let hours = 0
let minutes = 0


let hourRotation = (hours) => {
    return (hours / 12) * 360
}
let minuteRotation = (minutes) => {
    return (minutes /60) * 360
}



//console.log("minute marker is on", minuteRotation(30)) // testing minuteRoation function
// console.log("the hour degrees should be", hourRotation(8)) // testing hourRotation function
// console.log("the second degrees should be", secondRotation(3)) // testing secondRotation function


// write function that will start counting up in seconds once page is loaded 

const countupSeconds = () => {
    seconds += 1;
    degreesSeconds = (seconds /60) * 360
    secondHand.style.transform = "rotate(" + degreesSeconds +"deg)" 
    } 
const countupMinutes = () => {
    minutes += 1;
    degreesMinutes = (minutes /60) * 360
    minuteHand.style.transform = "rotate(" + degreesMinutes +"deg)" 
    } 
const countupHours = () => {
    hours += 1;
    degreesHours =  (hours /60) * 360
    hourHand.style.transform = "rotate(" + degreesHours +"deg)" 
    } 

setInterval(countupSeconds, 1000)
setInterval(countupMinutes, 60010)
setInterval(countupHours, 3600000)







