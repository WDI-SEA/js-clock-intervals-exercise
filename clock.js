var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var now = new Date();
s = 1;
m = 1;
h = 1;

let secondsMove = function() {
    var Secondsdegrees = (1/60) * 360 * s++;
    second.style.transform = "rotate(" + Secondsdegrees + "deg)";    
}

setInterval(secondsMove, 1000);

let minutesMove = function() {
    let Minutedegrees = (1/60) * 360 * m++;
    minute.style.transform = "rotate(" + Minutedegrees + "deg)";    
}

setInterval(minutesMove, 60000);

let hourMove = function() {
    let Hourdegrees = (5/60) * 360 * h++;
    hour.style.transform = "rotate(" + Hourdegrees + "deg)"; 
}

setInterval(hourMove, 3600000);

