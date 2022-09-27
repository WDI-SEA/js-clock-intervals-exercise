const tickSecond = document.getElementById("second")
const tickMiunte = document.getElementById("minute")
const tickHour =document.getElementById("hour")


//Show Actual Time


function ClockRotate() {
    //Date objects to display the actual time
    const now = new Date()


    //second tick
    //.getSeconds() is method return the second in the specified date according to local time
    let secondRotation = now.getSeconds()
    // it show how many degrees the hand should be rotated  the second around the clock
    let secondsDegrees = (secondRotation/ 60)* 360
    //transform rotation to rotate the second hand of the clock
    tickSecond.style.transform = `rotate(${secondsDegrees}deg)`
    
    //mintue tick
    //.getMinutes() is method return the minute in the specified date according to local time
    let minuteRotation = now.getMinutes()
     // it show how many degrees the hand should be rotated  the minut around the clock
    let minuteDegrees = (minuteRotation/60)*360
    //transform rotation to rotate the minute hand of the clock
    tickMiunte.style.transform = `rotate(${minuteDegrees}deg)`
    
    //hour tick
    //.getHours() is method return the hour in the specified date according to local time
    let hourRotation= now.getHours()
     // it show how many degrees the hand should be rotated  the hour around the clock
    let hourDegrees = (hourRotation/12)* 360
    //transform rotation to rotate the hour hand of the clock
    tickHour.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(ClockRotate, 1000)





















