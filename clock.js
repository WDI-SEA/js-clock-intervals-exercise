//Global Vars
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
let deg = 0;
let counter = 1;
let mCounter = 60;
let hCounter = 3780;

//Helper Functions
var secondToDeg = function(num) {
    let next = num / 10;
    return (next / 60) * 360;
}

var minuteToDeg = function(num) {
    let next = num / 60;
    return ((num / 60) / 60) * 360;
}

var hourToDeg = function(num) {
    return ((num / 60) / 60)/12 * 360;
}

//Interval functions 
setInterval(function() {
    deg = secondToDeg(counter);
    counter++
    secondHand.style.transform = "rotate(" + deg + "deg)";
}, 100)

setInterval(function() {
    deg = minuteToDeg(mCounter);
    mCounter++;
    minuteHand.style.transform = "rotate(" + deg + "deg)";
}, 1000)

setInterval(function() {
    deg = hourToDeg(hCounter);
    hCounter++;
    hourHand.style.transform = "rotate(" + deg + "deg)";
}, 1000)
