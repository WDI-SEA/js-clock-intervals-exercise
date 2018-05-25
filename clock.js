document.addEventListener('DOMContentLoaded', function () {

    // define elements to work with
    var clock = document.getElementById('clock');
    var secondHand = document.getElementById('second'); // rotate 6deg / 1000ms
    var minuteHand = document.getElementById('minute'); // rotate 6deg / 60000ms
    var hourHand = document.getElementById('hour');     // rotate 30deg / 3600000ms
    
    // counter to link up clock movement minute rotates 6deg when counter%60 === 0, hour 6deg counter%720 === 0
    var clockPosition = 0;
    
    // check and set condition to reset after 11:59:59;
    var resetCheck = function(){
        if ( clockPosition === 43200 ) {
            clockPosition = 0;
        } 
    }

    // grab time for starting position
    var timeAtLoad = new Date();
    console.log(timeAtLoad);
    
    // functions to determine degree of rotation for each hand
    var rotationOfSecondHand = function(second) {
        return (second / 60 * 360);
    }    
    var rotationOfMinuteHand = function(minute) {
        return (minute / 60 * 6);
    }    
    var rotationOfHourHand = function(hour) {
        return (hour / 120);
    }    

    //function to set starting position
    // var getStartingPosition = function() {
    //     startingTimes = [];
    //     // var startingHour = timeAtLoad.getHours();
    //     // var startingMinute = timeAtLoad.getMinutes();
    //     // var startingSecond = timeAtLoad.getSeconds();
    //     startingTimes.push(rotationOfHourHand(timeAtLoad.getHours()));
    //     startingTimes.push(rotationOfMinuteHand(timeAtLoad.getMinutes()));
    //     startingTimes.push(rotationOfSecondHand(timeAtLoad.getSeconds()));

    //     var sum = startingTimes.reduce(function(acc,time) {
    //         return acc + time;
    //     } )

    //     return sum;

    // }
    
    // clockPosition = getStartingPosition();
    

    var rotate = function(){
        var secondDegrees = rotationOfSecondHand(clockPosition);
        var minuteDegrees = rotationOfMinuteHand(clockPosition);
        var hourDegrees = rotationOfHourHand(clockPosition);

        secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
        if (clockPosition%720 === 0){
            console.log(hourDegrees);
            hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
            minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)'; // to avoid losing a minute every hour---I think?
        } else if (clockPosition%60 === 0){
            minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
        }
        clockPosition++;        
    }

    setInterval(rotate, 1);

    resetCheck();

});