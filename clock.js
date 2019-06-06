

var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

// console.log({hourHand,minuteHand,secondHand})

setInterval(setClock, 1000);

    function setClock() {
        var time = new Date();
        var seconds = time.getSeconds() / 60;
        var minutes = (seconds + time.getMinutes()) / 60;
        var hours = (minutes + time.getHours()) / 12;
        
        setRotation(secondHand, seconds);
        setRotation(minuteHand, minutes);
        setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('transform', "rotate("+ rotationRatio * 360 +"deg)")
}



// what do you need to do to get a clock to do the "bounce back" motion

// the second hand needs to overshoot by a slight
//  degree and then come back to...



// hour = hour.setInterval(function tickTock() {

// }, 360) 











// make hour hand move with interval method thingy
    // what is hour hand reacting to?


// source for help video https://youtu.be/KiOXXrlHY
// ran into some issues so I used this for reference











// make minute hand move with interval method thingy










// make second hand move with interval method thingy









