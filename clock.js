let i = 0;
setInterval(function() {
  return(i++);
}, 1000);

// //function that rotates hour hand every 1 hour(3600000 millis) by 30 degrees an interval
let hourHand = document.getElementById('hour')
function hourRotation() {
    return hourHand.style.transform = "rotate(" + ((1/120)*i) + "deg)"
}
const hourInterval = setInterval(hourRotation, 1000)

// //function that rotates minute hand every 1 minute (60000 millis) by 6 degrees an interval
let minuteHand = document.getElementById('minute')
function minuteRotation() {
    return minuteHand.style.transform = "rotate(" +(.1*i)+ "deg)"
}
const minuteInterval = setInterval(minuteRotation, 1000)

// function that rotates second hand every 1 second (1000 millis) by 6 degrees an interval
let secondHand = document.getElementById('second')
function secondRotation() {
    return secondHand.style.transform = "rotate(" + (6*i) + "deg)"
}
const secondInterval = setInterval(secondRotation, 1000)
