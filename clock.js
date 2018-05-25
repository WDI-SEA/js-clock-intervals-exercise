document.addEventListener('DOMContentLoaded', function () {

    // define elements to work with
    var clock = document.getElementById('clock');
    var secondHand = document.getElementById('second'); // rotate 6deg / 1000ms
    var minuteHand = document.getElementById('minute'); // rotate 6deg / 60000ms
    var hourHand = document.getElementById('hour');     // rotate 30deg / 3600000ms
    
    // counter to link up clock movement minute rotates 6deg when counter%60 === 0, hour 6deg counter%720 === 0
    var rotationCounter = 0;
    var timeAtLoad = new Date();
    console.log(timeAtLoad);
    
    //function to set starting position
    // var getStartingPosition = function() {
    //     var startingHour = timeAtLoad.getHours();
    //     var startingMinute = timeAtLoad.getMinutes();
    //     var startingSecond = timeAtLoad.getSeconds();
    // }
    
    var rotationOfSecondHand = function(second) {
        return (second / 60 * 360);
    }    
    var rotationOfMinuteHand = function(minute) {
        return (minute / 60 * 6);
    }    
    var rotationOfHourHand = function(hour) {
        return (hour / 120);
    }    
    

    var rotate = function(){
        var secondDegrees = rotationOfSecondHand(rotationCounter);
        var minuteDegrees = rotationOfMinuteHand(rotationCounter);
        var hourDegrees = rotationOfHourHand(rotationCounter);

        secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
        if (rotationCounter%720 === 0){
            console.log(hourDegrees);
            hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
        } else if (rotationCounter%60 === 0){
            minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
        }
        rotationCounter++;        
    }

    setInterval(rotate, 1000);
});