let secDeg = 0.1
let minDeg = 6
let hrDeg = 30

let sec = document.getElementById("second")
let min = document.getElementById("minute")
let hr = document.getElementById("hour")

// sec.style.transform = rotate((1/60)*360, 1000)
setInterval(function(){sec.style.transform = rotate(secDeg)}, 1000)