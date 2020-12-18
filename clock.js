
var seconds = document.getElementById("second")
var minutes = document.getElementById("minute")
var hours = document.getElementById("hour")

let secondCount=6
let minuteCount=.1
let hourCount=.00833333
let sRotation=0
let mRotation=0
let hRotation=0

setInterval(function() {
    seconds.style.transform = "rotate(" + (sRotation += secondCount) + "deg)"
    minutes.style.transform = "rotate(" + (mRotation += minuteCount) +"deg)"
    hours.style.transform = "rotate(" + (hRotation += hourCount) + "deg)"

}, 1000)
