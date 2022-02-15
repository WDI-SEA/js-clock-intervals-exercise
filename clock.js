//things to move -- hour hand, minute hand, second hand.
//hour hand--- every hour, moves 5/60 of 360 degrees.  it takes 3600 seconds
//          that means to go that one hour 
//minute hand-- 360degrees every hour (60 minutes * 60 seconds) 3600 seconds= 60000ms  per minute
//second hand-- 360 degrees every minute / 60 seconds= )1000ms  per 6 degrees
//one tick on the Clock (360 degrees/60 ticks= 6 degrees per second)

// const now = new Date()

// let clockRotation = () => {

// }

//the hour hand is moving 5/60 of the 360 degrees of the whole clock


    let rotateHour = () =>{
    const hourHand = document.getElementById("hour");
    hourHand.style.transform = 'rotate(30deg)';
    // hourHand.rotate(30);
    }

//the minute hand is moving 1/60th of 360


    let rotateMinute = () =>{
        const minuteHand = document.getElementById("minute");
        minuteHand.style.transform = 'rotate(6deg)';
        // minuteHand.rotate(6);
        
    }
//the second hand is also moving 1/60th of the 360 degrees clock, only faster


    let rotateSecond = () =>{
        const secondHand = document.getElementById("second");
        secondHand.style.transform = 'rotate(6deg)';
        // secondHand.rotate(6);
    }




    //second hand
setInterval(rotateSecond, 1000);

//minute hand
setInterval(rotateMinute, 60000);

//hour hand
setInterval(rotateHour, 3600000);
