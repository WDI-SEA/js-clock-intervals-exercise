// Reference:
//  - w3school

let secHand = document.getElementById("second");
let minHand = document.getElementById("minute");
let hrsHand = document.getElementById("hour");

function startTime() {
    let today = new Date(); 
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
// Analog Clock 
let hrsDeg = hrs * 30; 
let minDeg = min * 6 ;
let secDeg = sec * 6;
hrsHand.style.transform = "rotate(" + hrsDeg + "deg)"; 
minHand.style.transform = "rotate(" + minDeg + "deg)";
secHand.style.transform = "rotate(" + secDeg + "deg)";

// digital clock
min = checkTime(min);
sec = checkTime(sec);
document.getElementById('txt').innerHTML = hrs + ":" + min + ":" + sec;
let t = setTimeout(startTime, 100);
}

// add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i ;
    }  
    return i;
}










