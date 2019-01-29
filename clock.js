//Declare variables

var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

var sTick = 1/6;
var mTick = 1/6;
var hTick = 1/36;


function secTick(){
    secondHand.style.transform = "rotate(" + sTick + "deg)";
    sTick = sTick + 1/6;      
};


setInterval(secTick, 1000/36);

function minTick(){
    minuteHand.style.transform = "rotate(" + mTick + "deg)";
    mTick = mTick + 1/6;      
};


setInterval(minTick, 10000/6);

function hourTick(){
    hourHand.style.transform = "rotate(" + hTick + "deg)";
    hTick = hTick + 1/36;      
};


setInterval(hourTick, 600000/36);

