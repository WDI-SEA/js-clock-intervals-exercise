// Update the hour hand every 12000 ms. Rotate 6 degrees clockwise.
// Update the minute hand every 60000 ms. Rotate 6 degrees clockwise.
// Update the second hand every 1000 ms. Rotate the 



// Variables
var secondHandPosition;
var minuteHandPosition;
var hourHandPosition;
var secondCounter;
var minuteCounter;
var hourCounter;

// HTML Element references
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');

// Functions
var initialize = function(){
    secondHandPosition = 0;
    minuteHandPosition = 0;
    hourHandPosition = 0;
    secondCounter = 0;
    minuteCounter = 0;
    hourCounter = 0;
}

var masterClockTiming = function(){
    if (secondCounter === 60){
        secondCounter = 0;
    };
    if (minuteCounter === (60*60)){
        minuteCounter = 0;
    };
    if (hourCounter === (60*60*12)){
        hourCounter = 0;
    };
    
    moveSecondHand();
    moveMinuteHand();
    moveHourHand();
    secondCounter++;
    minuteCounter++;
    hourCounter++;
}

var moveSecondHand = function(){
    secondHandPosition += 6;
    secondHand.style.transform = "rotate("+ secondHandPosition + "deg)";
}

var moveMinuteHand = function(){
    minuteHandPosition += 6/60;
    minuteHand.style.transform = "rotate("+ minuteHandPosition + "deg)";
}

var moveHourHand = function(){
    hourHandPosition += 6/60/12;
    hourHand.style.transform = "rotate("+ hourHandPosition + "deg)";
}

initialize();
setInterval(masterClockTiming,10);
