let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let Sdegrees = 0;
let Mdegrees = 0;
let Hdegrees = 0;
let secondsCount = 0;
let minutesCount = 0;

const secondClick = () => {
    const secondsTick = () => {
        Sdegrees = Sdegrees + (360/60);
        second.style.transform = `rotate(${Sdegrees}deg)` // I wrote it this way because it has to match the writing in css "rotate(0deg)"
        secondsCount++
        if (secondsCount%60 == 0) {
            minuteClick()
        }
    }
    setInterval(secondsTick, 1000)
}

const minuteClick = () => {
    Mdegrees = Mdegrees + (360/60);
    minute.style.transform = `rotate(${Mdegrees}deg)`
    minutesCount++
    if (minutesCount%60 ==0) {
        hourClick()
    }
}

const hourClick = () => {
    Hdegrees = Hdegrees + (360/12);
    hour.style.transform = `rotate(${Hdegrees}deg)`
}

document.addEventListener("DOMContentLoaded", ()=> {
    secondClick()
})