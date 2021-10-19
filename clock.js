let degreesSeconds = secondRotation()
let degreesHours = hourRotation()
let degreesMinutes = minuteRotation()

let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')




let secondRotation = (seconds) => {
    return (seconds /60) * 360
}

let hourRotation = (hours) => {
    return (hours / 12) * 360
}
let minuteRotation = (minutes) => {
    return (minutes /60) * 360
}



//console.log("minute marker is on", minuteRotation(30)) // testing minuteRoation function
// console.log("the hour degrees should be", hourRotation(8)) // testing hourRotation function
// console.log("the second degrees should be", secondRotation(3)) // testing secondRotation function
