let secondHand = document.querySelector('#second')
let minuteHand = document.querySelector('#minute')
let hourHand = document.querySelector('#hour')
let secDeg = 0
let minDeg = 0
let hourDeg = 0
let sec = 1
let min = 1 
let hour = 1


const seconds =() => {
    secDeg=sec*6
    sec++
    secondHand.style.transform = 'rotate(' + secDeg + 'deg)'
    console.log('tick')
}

let  secTime= setInterval(seconds, 1000)



const minutes=()=>{
    minDeg=min*6
    min++
    minuteHand.style.transform = 'rotate(' + minDeg + 'deg)'
    console.log('tock')
}

let  minTime= setInterval(minutes, 60000)

const hours=()=>{
    hourDeg=hour*6
    hour++
    hourHand.style.transform= 'rotate(' + hourDeg + 'deg)'
}
let  hourTime= setInterval(hours, 72000)