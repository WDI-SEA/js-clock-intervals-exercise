


let secondDegrees = 0
let minuteDegrees = 0
let hourDegrees = 0

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hourHand')
const clockFace = document.querySelector('#face')
const nowButton = document.querySelector('#current-time')

secondHandCounter = 0
minuteHandCounter = 0
hourHandCounter = 0


setInterval(()=> {
    secondDegrees = secondDegrees+6;
    secondHandCounter++;
    secondHandCounter = secondHandCounter % 60
    console.log(secondHandCounter)
    secondHand.style.transform = "rotate(" + secondDegrees+ "deg)";
 

}, 1000)

setInterval(() => {
    minuteDegrees = minuteDegrees+6;
    minuteHandCounter++;
    minuteHandCounter = minuteHandCounter % 60
    console.log(minuteHandCounter)
    minuteHand.style.transform = "rotate(" + minuteDegrees+ "deg)";
}, 60000)

setInterval(() => {
    setInterval(()=> {
    hourDegrees = hourDegrees+6
    },12000)
    hourHandCounter++;
    hourHandCounter = hourHandCounter % 12
    console.log(hourHandCounter)
    hourHand.style.transform = "rotate(" + minuteDegrees+ "deg)";
}, 3600000)

let now = new Date();
let currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

nowButton.addEventListener('click', () => {
    nowSDegree =
    nowMDegree =
    nowHDegree =
    nowSecondHand


})