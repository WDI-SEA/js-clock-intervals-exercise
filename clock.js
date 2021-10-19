let secondHand = document.querySelector('#second');
let minuteHand = document.querySelector('#minute');
let hourHand = document.querySelector('#hour');
let secondDegrees = 0
let minuteDegrees = 0
let hourDegrees = 0
let seconds = 1
let minutes = 1
let hours = 1

//make second hand rotate
function secondHandRotate(){   
        
        secondDegrees = 6 * seconds
        seconds++
        secondHand.style.transform = "rotate(" + secondDegrees + "deg)"                 
}
//set timer for seconds
const secondTimer = setInterval(secondHandRotate, 1000)

//make minute hand rotate
function minuteHandRotate(){   
        
    minuteDegrees = 6 * minutes
    minutes++
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"      
}
//set timer for minutes
const minuteTimer = setInterval(minuteHandRotate, 60000)

//make hour hand rotate
function hourHandRotate(){   
        
    hourDegrees = 6 * hours
    hours++
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"      
}
//set timer for hour hand
const hourTimer = setInterval(hourHandRotate, 720000)

