const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')




let degreeHour = 0
const hourRotation = () => {
    if(degreeHour < 360){
        degreeHour+=30
    } else if (degreeHour === 360) {
        degreeHour = 0
    }
    hourHand.style.transform = "rotate(" + degreeHour + "deg)"
}
setInterval(hourRotation, 3600000)

let degreesMinute = 0
const minuteRotation = () => {
    if(degreesMinute < 360){
        degreesMinute+=6
    } else if (degreesMinute === 360) {
        degreesMinute = 0
    }
    minuteHand.style.transform = "rotate(" + degreesMinute + "deg)"
}
setInterval(minuteRotation, 60 * 1000)

let degreesSecond = 0
const secondRotation = () => {
    if(degreesSecond < 360){
        degreesSecond+=5
    } else if (degreesSecond === 360) {
        degreesSecond = 0
    }
    secondHand.style.transform = "rotate(" + degreesSecond + "deg)"
}
setInterval(secondRotation,1000)



const now = new Date()





