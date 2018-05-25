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
        return (minute / 60 );
    }    
    var rotationOfHourHand = function(hour) {
        return (hour / 12);
    }    
    
    // var rotate = function(degrees) {
    //     secondHand.style.transform = 'rotate('+ degrees + 'deg)';        
    //     rotationCounter++;
    // }
    
    // var degreesToRotate = function(){
    //     rotationOfSecondHand(rotationCounter);
    // }

    // setInterval(function(){
    //     rotate(degreesToRotate);
    // }, 1000);

    var rotate = function(){
        var secondDegrees = rotationOfSecondHand(rotationCounter);
        var minuteDegrees = rotationOfMinuteHand(rotationCounter);
    
        secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
        if (rotationCounter%60 === 0){
            console.log(secondDegrees)
            minuteHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
        }
        rotationCounter++;        
    }

    setInterval(rotate, 100);
});