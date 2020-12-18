document.addEventListener('DOMContentLoaded', function() {
    clockRun();

    function clockRun() {
// DOM values
        let secondHand = document.querySelector("#second");
        let minHand = document.querySelector("#minute");
        let hrHand = document.querySelector("#hour");

// Current Times
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

// Setting up Angles
        let secAngle = sec * 6;
        let minAngle = (min * 6) + (sec * 6 / 360);
        let hrAngle = (hr * 30) + (1 / 2 * min);
        
// Setting up Angle Value
        let secAngleValue = "rotate(" + secAngle + "deg)";
        let minAngleValue = "rotate(" + minAngle + "deg)";
        let hrAngleValue = "rotate(" + hrAngle + "deg)";

// DOM Orders
        secondHand.style.transform = secAngleValue;
        minHand.style.transform = minAngleValue;
        hrHand.style.transform = hrAngleValue;
    }
// Set Interval
    setInterval(clockRun, 1000);

});



