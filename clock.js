var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

console.log(second)
console.log(minute)
console.log(hour)
s = 1;
h = 1;
m = 1;

let secondsMove = function() {
    var Secondsdegrees = (1/60) * 360 * s++;
    second.style.transform = "rotate(" + Secondsdegrees + "deg)"; 
    console.log(Secondsdegrees);
}

setInterval(secondsMove, 1000);