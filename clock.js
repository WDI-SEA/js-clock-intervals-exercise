let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')




let num = 1
let num2 = 1
let num3 = 1

const hourRotation = () => {
    let hourDegrees =  (num3 / 12 ) * 360
    num3++
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
}

const minuteRotation = () => {
    let minuteDegrees = (num2 / 60) * 360
    num2++
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
}

const secondRotation = () => {
    let secondDegrees = (num / 60) * 360
    num++
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

const secondsHand = setInterval(secondRotation, 1000);
const minutesHand = setInterval(minuteRotation, 60000);
const hourHands = setInterval(hourRotation, 1000* 60*60);





