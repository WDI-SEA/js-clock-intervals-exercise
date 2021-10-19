let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secHand = document.getElementById("second");

const clockIsTiming = () => {
        const currentTime = new Date();

        const seconds = currentTime.getSeconds()
        // getting seconds from the new Date fucntion
        const secondRotation = () => {
            return ((seconds / 60) * 360);
        } 
        // calculating seconds of degrees that the second had would have to turn
        const degreesOfSeconds = secondRotation()
        secHand.style.transform = "rotate(" + degreesOfSeconds + "deg)";

        
        
}

setInterval(clockIsTiming, 1000)
clockIsTiming()
