//Declare variables

var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

var sTick = 6;
var mTick = 6;
var hTick = 6;


function secTick(){
    secondHand.style.transform = "rotate(" + sTick + "deg)";
    sTick = sTick + 6;      
};


setInterval(secTick, 1000)

function minTick(){
    minuteHand.style.transform = "rotate(" + mTick + "deg)";
    mTick = mTick + 6;      
};


setInterval(minTick, 60000)

function hourTick(){
    hourHand.style.transform = "rotate(" + hTick + "deg)";
    hTick = hTick + 6;      
};


setInterval(hourTick, 3600000)

