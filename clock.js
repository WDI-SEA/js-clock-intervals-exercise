let i = 0;
setInterval(function() {
  return(i++);
}, 1000);

// //function that rotates hour hand
let hourHand = document.getElementById('hour')
function hourRotation() {
    return hourHand.style.transform = "rotate(" + ((1/120)*i) + "deg)"
}
const hourInterval = setInterval(hourRotation, 1000)

// //function that rotates minute hand
let minuteHand = document.getElementById('minute')
function minuteRotation() {
    return minuteHand.style.transform = "rotate(" +(.1*i)+ "deg)"
}
const minuteInterval = setInterval(minuteRotation, 1000)

// function that rotates second hand
let secondHand = document.getElementById('second')
function secondRotation() {
    return secondHand.style.transform = "rotate(" + (6*i) + "deg)"
}
const secondInterval = setInterval(secondRotation, 1000)
