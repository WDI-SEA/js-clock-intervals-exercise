// Variables
var secondHandPosition;
var minuteHandPosition;
var hourHandPosition;
var secondCounter;
var minuteCounter;
var hourCounter;
var secondsCurrent;
var minutesCurrent;
var hoursCurrent;

// HTML Element references
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');

// Functions
var initialize = function(){
    calibrateTime();
    secondCounter = 0;
    minuteCounter = 0;
    hourCounter = 0;
}

var calibrateTime = function(){
    currentTime = new Date();
    secondsCurrent = currentTime.getSeconds();
    minutesCurrent = currentTime.getMinutes();
    hoursCurrent = currentTime.getHours();
    //console.log(currentTime)
    // Convert from 24hr to 12hr
    if (hoursCurrent > 12){
        hoursCurrent -= 12;
    }
    else if (hoursCurrent === 0) {
        hoursCurrent = 12;
    }   
    // else hoursCurrent = hoursCurrent
    secondHandPosition = (secondsCurrent / 60) * 360;
    minuteHandPosition = (minutesCurrent / 60) * 360;
    hourHandPosition = (hoursCurrent / 12) * 360;
}

var masterClockTiming = function(){
    if (secondCounter === 60){
        secondCounter = 0;
        calibrateTime();
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
setInterval(masterClockTiming,1000);


