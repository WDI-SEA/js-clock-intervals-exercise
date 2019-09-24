var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

console.log(second)
console.log(minute)
console.log(hour)
s = 1;
m = 1;
h = 1;

let secondsMove = function() {
    var Secondsdegrees = (1/60) * 360 * s++;
    second.style.transform = "rotate(" + Secondsdegrees + "deg)"; 
    console.log(Secondsdegrees);
}

setInterval(secondsMove, 1000);

let minutesMove = function() {
    let Minutedegrees = (1/60) * 360 * m++;
    minute.style.transform = "rotate(" + Minutedegrees + "deg)"; 
    console.log(Minutedegrees);
}

setInterval(minutesMove, 60000);

let hourMove = function() {
    let Hourdegrees = (5/60) * 360 * h++;
    hour.style.transform = "rotate(" + Hourdegrees + "deg)"; 
    console.log(Hourdegrees);
}

setInterval(hourMove, 360000);