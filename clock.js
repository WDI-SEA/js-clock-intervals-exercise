

const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")


//Defining the variables
let secondsCount = 0, minutesCount = 0, hoursCount = 0, secondsDegree, minutesDegree, hoursDegree

//Rotate the seconds
const secondRotation = () => {
    secondsCount = secondsCount%60
    secondsDegree = (secondsCount/60)*360
    second.style.transform = "rotate(" + secondsDegree + "deg)"

    //Change minutes if it reaches 60 seconds
    if(secondsCount%60 === 0){
        setTimeout(minutesRotation, timeSpeed)

    }
    secondsCount++
}


//Rotate the minutes
const minutesRotation = () => {
    minutesCount = minutesCount%60
    minutesDegree = (minutesCount/60)*360
    minute.style.transform = "rotate(" + minutesDegree + "deg)"

    //Change hour if it reaches 60 seconds
    if(minutesCount%60 === 0){
        setTimeout(hourRotation, timeSpeed)
    }

    minutesCount++
}

//Rotate the hours
const hourRotation = () => {
    hoursCount = hoursCount%60
    hoursDegree = (hoursCount/12)*360
    hour.style.transform = "rotate(" + hoursDegree + "deg)"
    hoursCount++
}


//Start the clock!
//Will call the secondRotation and the rest will follow
let timeSpeed = 10
setInterval(secondRotation, timeSpeed)