//seconds

let second = 0

let secondsHand = document.getElementById('second')

const countSeconds = () => {
    second++
    let degrees = (second / 60) * 360
    secondsHand.style.transform = "rotate(" + degrees + "deg)"
}

setInterval(countSeconds, 1000)

//minutes

let minute = 0

let minutesHand = document.getElementById('minute')

const countMinutes = () => {
    minute++
    let degrees = (minute / 3600) * 360
    minutesHand.style.transform = "rotate(" + degrees + "deg)"
}

setInterval(countMinutes, 1000)

//hours

let hour = 0

let hoursHand = document.getElementById('hour')

const countHours = () => {
    hour++
    let degrees = (hour / 216000) * 360
    hoursHand.style.transform = "rotate(" + degrees + "deg)"
}

setInterval(countHours, 1000)

//12 instead of 216000
//360000 instead of 1000